class BooksController < ApplicationController

    skip_before_action :authorized, only: [:index, :favorite]

    def index
        user = User.find(session[:user_id])
        books = Book.where(group:user.group_name).order(:created_at)
        render json: books
    end

    def update
        user = User.find(session[:user_id])
        book = Book.find(params[:id])
        book.update!(book_params)
        render json: book,root: false
    end

    def create
        user=User.find(session[:user_id])
        book = Book.new(book_params)
        book.group = user.group_name
        book.save!
        user.book_for_vote=book.id
        user.save(validate: false)

        render json: (book), status: :created, root: false
    end

    def vote
        user = User.find(session[:user_id])
        book = Book.find(params[:voteBook])
        higherVotes=book.votes+1
        book.update!({votes:higherVotes})

        if params[:currentBook]>0
            currentBook = Book.find(params[:currentBook])
            if currentBook.votes>0
                lowerVotes=currentBook.votes-1
                currentBook.update!({votes:lowerVotes})
            end
        end
        
        user.current_vote=params[:voteBook]
        user.save(validate:false)
        
        
        render json: ([book,currentBook])
    end

    def finish
        current_user = User.find(session[:user_id])
        next_book=Book.where(group:current_user.group_name).where(["finished=false and current_book=false"]).order(votes: :desc).first

            if next_book
                if params[:finishedBook]
                    book=Book.find(params[:finishedBook])
                    book.update!({finished:true,current_book:false,votes:0})
                end
            
                    User.where(group_name:current_user.group_name).update_all current_vote:0
                    Book.where(group:current_user.group_name).update_all votes:0

                    user = User.find_by({book_for_vote:next_book.id})
                    user.book_for_vote=0
                    user.current_vote=0
                    user.save(validate: false)
                    next_book.update!({current_book:true,votes:0})

                    

                    render json: ([book,next_book,user])
            else
                render json: {errors: ["Must have book up for vote"]}, status: :not_found
            end
    end



    private

    def book_params
        params.permit(:title,:author,:description,:thumbnail,:current_book,:votes,:finished)
    end
    
    
end

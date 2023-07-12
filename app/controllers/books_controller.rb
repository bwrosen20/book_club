class BooksController < ApplicationController

    skip_before_action :authorized, only: :index

    def index
        books = Book.all.order(:created_at)
        render json: books
    end

    def create
        book = Book.create!(book_params)

        user=User.find(params[:user_id])
        user.update!({book_for_vote:book.id})

        render json: ([book,user]), status: :created
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        head :no_content
    end

    def update
        book = Book.find(params[:id])
        book.update!(book_params)
        render json: book, status: :created
    end

    def vote
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

        user = User.find(params[:user_id])
        user.update!({current_vote:params[:voteBook]})
        
        
        render json: ([book,currentBook,user])
    end

    def finish
        next_book=Book.where(["finished=false and current_book=false"]).order(votes: :desc).first
        if next_book
            if params[:finishedBook]>0
                book=Book.find(params[:finishedBook])
                book.update!({finished:true,current_book:false})
            end
        
                user = User.find_by({book_for_vote:next_book.id})
                user.update!({book_for_vote:0})

                next_book.update!({current_book:true})

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

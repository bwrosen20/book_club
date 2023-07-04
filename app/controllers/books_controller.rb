class BooksController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized, only: :index

    def index
        books = Book.all.order(:created_at)
        render json: books
    end

    def create
        book = Book.create!(book_params)

        user=User.find(params[:user_id])
        user.update!({book_for_vote:book.id})

        render json: [book,user], status: :created
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
        
                user = User.find_by(id:params[:book_owner])
                user.update!({book_for_vote:0})

                next_book.update!({current_book:true})

                render json: ([book,next_book,user])
        else
            render json: {errors: ["Must have book up for vote"]}, status: :not_found
        end
    
    end

    def review
        book = Book.find(params[:book_id])
        book.reviews.create!(review_params)
        render json: book
    end

    def editReview
        review = Review.find(params[:review_id])
        review.update!(review_params)
        render json: review
    end

    def deleteReview
        book = Book.find(params[:book_id])
        review = Review.find(params[:review_id])
        review.destroy
        render json: book
    end


    private

    def book_params
        params.permit(:title,:author,:description,:thumbnail,:current_book,:votes,:finished)
    end
    
    def review_params
        params.permit(:user_id,:body,:rating)
    end

    def render_unprocessable_entity_error(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Book not found"}, status: :not_found
    end
end

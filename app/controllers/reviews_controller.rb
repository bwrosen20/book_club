class ReviewsController < ApplicationController
    
    def create
        book = Book.find(params[:book_id])
        book.reviews.create!(review_params)
        render json: book
    end

    def update
        user=User.find(params[:user_id])
        review = user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        user=User.find(params[:user_id])
        book = Book.find(params[:book_id])
        review = user.reviews.find(params[:id])
        review.destroy
        render json: book
    end

    private

    def review_params
        params.permit(:user_id,:body,:rating)
    end

end

class ReviewsController < ApplicationController
    
    def create
        user = current_user
        book = Book.find(params[:book_id])
        review = user.reviews.new(review_params)
        review.book=book
        review.save!
        render json: book
    end

    def update
        user=current_user
        review = user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        user=current_user
        book = Book.find(params[:book_id])
        review = user.reviews.find(params[:id])
        review.destroy
        render json: book
    end

    private

    def current_user
        User.find(session[:user_id])
    end

    def review_params
        params.permit(:body,:rating)
    end

end

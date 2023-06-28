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
        render json: book, status: :created
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
        lowerVotes=currentBook.votes-1
        currentBook.update!({votes:lowerVotes})
        end
        
        books = Book.all.order(:created_at)
        render json: books
    end


    private

    def book_params
        params.permit(:title,:author,:description,:thumbnail,:current_book,:votes,:finished)
    end

    def render_unprocessable_entity_error(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Book not found"}, status: :not_found
    end
end

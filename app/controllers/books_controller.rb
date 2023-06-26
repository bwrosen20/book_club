class BooksController < ApplicationController
    skip_before_action :authorized, only: :index
    def index
        books = Book.all
        render json: books
    end
end

class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, methods: :vote_book
    end
end

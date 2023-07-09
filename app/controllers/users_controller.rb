class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]
    def index
        users = User.all
        render json: users
    end

    def create
        new_user = User.create(user_params)
        if new_user.valid?
            session[:user_id] = new_user.id
            render json: new_user, status: :created
        else
            render json: {errors: new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        user.update!(update_params)
        render json: user
    end

   
    def show
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Please signup or login"}, status: :unauthorized
    end

    


    private

    def user_params
        params.permit(:name, :password, :password_confirmation,  :favorite_book, :bio, :current_vote, :profile_image,)
    end

    def update_params
        params.permit(:current_vote)
    end

end

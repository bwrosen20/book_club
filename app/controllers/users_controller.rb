class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    def index
        users = User.all
        render json: users
    end

    def create
        group_array = User.all.pluck(:group_name)
        if group_array.include?(params[:group_name])
            render json: {errors: ["Group name already exists"]}, status: :unprocessable_entity
        else
        new_user = User.new(user_params)
        new_user.admin=true
        new_user.save!
            session[:user_id] = new_user.id
            render json: new_user, status: :created
    end

    def signup
        group_array = User.all.pluck(:group_name)
        if group_array.include?(params[:group_name])
        new_user = User.new(user_params)
        new_user.admin=false
        new_user.save!
            session[:user_id]=new_user.id
            render json: new_user, status: :created

        else
            render json: {errors: ["Group does not exist"]}, status: :unprocessable_entity

    end

   
    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end


    private

    def user_params
        params.permit(:name, :password, :password_confirmation,  :favorite_book, :bio, :current_vote, :profile_image, :group_name)
    end

end

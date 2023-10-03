class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create, :google]
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            books = Book.where(group:user.group_name).order(:created_at)
            render json: [user,*books], root: false
        else
            render json: {errors: ["Invalid email or password"]}, status: :unauthorized
        end
    end

    def google
        user = User.find_by(email:params[:loginMail])
        session[:user_id] = user.id
        books = Book.where(group:user.group_name).order(:created_at)
        render json: [user,*books], root: false
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end

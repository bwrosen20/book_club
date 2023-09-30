class UsersController < ApplicationController
    skip_before_action :authorized, only: [:google_create,:google_signup]
    def index
        current_user = User.find(session[:user_id])
        users = User.where(group_name:current_user.group_name)
        render json: users
    end

    # def create
    #     group_array = User.all.pluck(:group_name)
    #     if group_array.include?(params[:group_name])
    #         render json: {errors: ["Group name already exists"]}, status: :unprocessable_entity
    #     else
    #     new_user = User.new(user_params)
    #     new_user.book_for_vote = 0;
    #     new_user.save!
    #         session[:user_id] = new_user.id
    #         render json: new_user, status: :created
    #     end
    # end

    def google_create
        group_array = User.all.pluck(:group_name)
        if group_array.include?(params[:group_name])
            render json: {errors: ["Group name already exists"]}, status: :unprocessable_entity
        else
            new_user = User.new(user_params)
            new_user.book_for_vote = 0
            new_user.admin=1
            new_user.save!
            books=[]
            session[:user_id] = new_user.id
            render json: [new_user,*books], root: false
        end
    end

    # def signup
    #     group_array = User.all.pluck(:group_name)
    #     if group_array.include?(params[:group_name])
    #     new_user = User.new(user_params)
    #     new_user.book_for_vote = 0;
    #     new_user.save!
    #         session[:user_id]=new_user.id
    #         render json: new_user, status: :created

    #     else
    #         render json: {errors: ["Group does not exist"]}, status: :unprocessable_entity
    #     end

    # end

    def google_signup
        group_array = User.all.pluck(:group_name)
        if group_array.include?(params[:group_name])
            new_user = User.new(user_params)
            new_user.book_for_vote = 0
            new_user.admin = 0
            new_user.save!
            session[:user_id]=new_user.id
            books = Book.where(group:new_user.group_name).order(:created_at)
            render json: [new_user,*books], root: false

        else
            render json: {errors: ["Group does not exist"]}, status: :unprocessable_entity
        end

    end

   
    def show
        current_user = User.find(session[:user_id])
        books = Book.where(group:current_user.group_name).order(:created_at)
        render json: [current_user,*books],root: false
    end


    private

    def user_params
        params.permit(:name, :password, :password_confirmation,:favorite_book, :bio, :current_vote, :profile_image, :group_name,:email, :admin)
    end

end

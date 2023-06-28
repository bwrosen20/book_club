class User < ApplicationRecord
     has_secure_password
     has_many :reviews, dependent: :destroy
     has_many :books, through: :reviews

     validates :name, presence: :true
     validates :name, uniqueness: :true
     # validates :password, length: {minimum: 8}
     validates :image_url, presence: :true

   def vote_book
        puts "Hey Hello What's Up"
   end
end


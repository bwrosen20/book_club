class User < ApplicationRecord
     has_secure_password
     has_many :reviews, dependent: :destroy
     has_many :books, through: :reviews

   def vote_book
        puts "Hey Hello What's Up"
   end
end


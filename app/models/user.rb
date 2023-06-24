class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :books, through: :reviews
end

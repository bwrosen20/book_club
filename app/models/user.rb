class User < ApplicationRecord
     has_secure_password
     has_many :reviews, dependent: :destroy
     has_many :books, through: :reviews
     has_one_attached :profile_image

     validates :name, presence: :true
     validate :acceptable_image
     validates :name, uniqueness: :true
     validates :password, presence: :true, confirmation: true, on: :create
     validates :password, length: {minimum: 8}, confirmation: true, on: :create

     def acceptable_image
          return unless profile_image.attached?
     end

end


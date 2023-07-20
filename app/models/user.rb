class User < ApplicationRecord
     has_secure_password
     has_many :reviews, dependent: :destroy
     has_many :books, through: :reviews
     has_one_attached :profile_image, dependent: :destroy

     validates :name, presence: :true
     validate :acceptable_image
     validates :bio, presence: :true
     validates :favorite_book, presence: :true
     validates :name, uniqueness: :true
     validates :password, presence: :true, confirmation: true, on: :create
     validates :password, length: {minimum: 8}, confirmation: true, on: :create

     def acceptable_image
               errors.add(:profile_image, "can't be blank") unless profile_image.attached?
     end

end


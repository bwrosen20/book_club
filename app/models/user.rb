class User < ApplicationRecord
     has_many :reviews, dependent: :destroy
     has_many :books, through: :reviews
     has_one_attached :profile_image, dependent: :destroy

     validates :name, presence: :true
     validates :name, uniqueness: { scope: :group_name,
     message: "aready used in your club" }
     validates :email, presence: :true
     validates :group_name, presence: :true
     validate :acceptable_image
     validate :unique_group_name
     validate :email_check
     validates :bio, presence: :true
     validates :favorite_book, presence: :true
     validates :email, uniqueness: :true
     # validates :password, presence: :true, confirmation: true, :on => :create
     # validates :password, length: {minimum: 8}, confirmation: true, :on => :create

     def acceptable_image
               errors.add(:profile_image, "can't be blank") unless profile_image.attached?
     end

     def unique_group_name
          errors.add(:group_name, "has already been taken") unless !admin || !(User.all.pluck(:group_name).uniq).include?(group_name)
     end

     def email_check
          errors.add(:email, "must be valid") unless (email.include?("@") && (email.include?(".")))
      end 

end


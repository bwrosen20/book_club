class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    validates :title, uniqueness: {scope: :group,
    message: "already used"}
end

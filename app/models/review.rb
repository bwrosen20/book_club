class Review < ApplicationRecord
    belongs_to :user
    belongs_to :book

    validates :rating, numericality: {
        greater_than_or_equal_to: 0.0,
        less_than_or_equal_to: 10.0
    }
    validates :body, presence: :true
    validates :rating, presence: :true
end

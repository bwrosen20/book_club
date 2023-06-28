class UserSerializer < ActiveModel::Serializer
  attributes :id, :bio, :favorite_book, :image_url, :name, :book_for_vote, :current_vote
end

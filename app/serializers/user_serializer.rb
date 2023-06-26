class UserSerializer < ActiveModel::Serializer
  attributes :id, :bio, :favorite_book, :image_url, :name, :book_for_vote, :vote_book


  def vote_book
    Book.find(self.object.book_for_vote)
  end
end

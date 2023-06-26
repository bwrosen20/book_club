class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :votes, :genres, :thumbnail, :finished, :updated_at, :current_book

  has_many :reviews
end


# t.string "title"
# t.string "author"
# t.text "description"
# t.integer "votes"
# t.string "genres"
# t.string "thumbnail"
# t.boolean "finished"
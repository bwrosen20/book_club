class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :votes, :genres, :thumbnail, :finished

  has_many :reviews
end


# t.string "title"
# t.string "author"
# t.text "description"
# t.integer "votes"
# t.string "genres"
# t.string "thumbnail"
# t.boolean "finished"
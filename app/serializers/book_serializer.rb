class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :votes, :thumbnail, :finished, :updated_at, :current_book

  has_many :reviews, order: :created_at
end


# t.string "title"
# t.string "author"
# t.text "description"
# t.integer "votes"
# t.string "genres"
# t.string "thumbnail"
# t.boolean "finished"
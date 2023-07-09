class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :bio, :favorite_book, :name, :book_for_vote, :current_vote, :profile_image

  def profile_image
    rails_blob_path(object.profile_image, only_path: true) if object.profile_image.attached?
  end
end

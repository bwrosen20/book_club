class ReviewSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :body, :rating, :user

  def user
      {"profile_image" => (rails_blob_path(object.user.profile_image, only_path: true) if object.user.profile_image.attached?),
        "name" => object.user.name,
      "id"=>object.user.id}
  end

end

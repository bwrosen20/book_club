class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.text :description
      t.integer :votes
      t.string :genres
      t.string :thumbnail
      t.boolean :finished

      t.timestamps
    end
  end
end

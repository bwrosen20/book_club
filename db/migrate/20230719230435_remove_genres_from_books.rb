class RemoveGenresFromBooks < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :genres, :string
  end
end

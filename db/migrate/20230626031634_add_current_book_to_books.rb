class AddCurrentBookToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :current_book, :boolean
  end
end

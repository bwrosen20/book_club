class AddGroupToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :group, :string
  end
end

class AddAdminToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :admin, :boolean
    add_column :users, :group_name, :string
    add_column :users, :email, :string
  end
end

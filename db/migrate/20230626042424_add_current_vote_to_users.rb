class AddCurrentVoteToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :current_vote, :integer
  end
end

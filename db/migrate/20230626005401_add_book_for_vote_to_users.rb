class AddBookForVoteToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :book_for_vote, :integer
  end
end

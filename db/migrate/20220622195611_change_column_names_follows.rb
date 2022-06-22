class ChangeColumnNamesFollows < ActiveRecord::Migration[5.2]
  def change
    rename_column :follows, :follow_id, :follower_id
    rename_column :follows, :follows_id, :following_id
  end
end

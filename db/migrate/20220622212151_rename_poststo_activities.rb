class RenamePoststoActivities < ActiveRecord::Migration[5.2]
  def change
    rename_table :posts, :activities
  end
end

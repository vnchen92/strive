class ChangeUsersTableName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :name, :firstName
    add_column :users, :lastName, :string
  end
end

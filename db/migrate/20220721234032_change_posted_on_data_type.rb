class ChangePostedOnDataType < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :posted_on
    add_column :activities, :posted_on, :datetime
  end
end

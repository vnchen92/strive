class ChangeColumnsInActivities < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :hours
    remove_column :activities, :minutes
    remove_column :activities, :seconds
    add_column :activities, :time, :string, :default => "00:00:00"
  end
end

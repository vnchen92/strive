class ChangeActivities < ActiveRecord::Migration[5.2]
  def change
    change_column :activities, :hours, :integer, :default => 00
    change_column :activities, :minutes, :integer, :default => 00
    change_column :activities, :seconds, :integer, :default => 00
  end
end

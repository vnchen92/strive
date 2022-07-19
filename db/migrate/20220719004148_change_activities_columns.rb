class ChangeActivitiesColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :activities, :hours, :string, :default => "00"
    change_column :activities, :minutes, :string, :default => "00"
    change_column :activities, :seconds, :string, :default => "00"
    change_column :activities, :distance, :float
    change_column :activities, :pace, :float
  end
end

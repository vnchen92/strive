class UpdateActivitiesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :distance, :integer
    add_column :activities, :pace, :integer
    add_column :activities, :hours, :integer
    add_column :activities, :minutes, :integer
    add_column :activities, :seconds, :integer
    add_column :activities, :static_map_url, :string
  end
end

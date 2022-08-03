class UpdateDefaultValueOfPoints < ActiveRecord::Migration[5.2]
  def change
    change_column :activities, :points, :json, :default => {:each_coord => []}
  end
end

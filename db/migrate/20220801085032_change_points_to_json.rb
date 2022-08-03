class ChangePointsToJson < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :points
    add_column :activities, :points, :json
  end
end

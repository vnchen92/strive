class ChangePointsType < ActiveRecord::Migration[5.2]
  def change
    change_column :activities, :points, :text
  end
end

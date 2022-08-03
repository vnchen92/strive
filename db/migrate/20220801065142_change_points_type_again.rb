class ChangePointsTypeAgain < ActiveRecord::Migration[5.2]
  def change
    change_column :activities, :points, :text, default: [].to_yaml
  end
end

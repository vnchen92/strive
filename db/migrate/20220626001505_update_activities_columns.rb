class UpdateActivitiesColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :points, :string, array: true
  end
end

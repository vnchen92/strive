class AddColumnToActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :posted_on, :string
  end
end

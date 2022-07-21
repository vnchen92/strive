class AddColumnToActivity < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :time, :string, :default => "00:00:00", null: false
  end
end

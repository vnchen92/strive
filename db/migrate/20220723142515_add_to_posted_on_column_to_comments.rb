class AddToPostedOnColumnToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :posted_on, :datetime
  end
end

class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null:false
      t.integer :user_id, null:false, index: true
      t.integer :activity_id, null: false, index: true
      t.timestamps
    end
  end
end

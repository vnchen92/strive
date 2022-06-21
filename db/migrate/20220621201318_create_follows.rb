class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follow_id, null: false, index: true
      t.integer :follows_id, null: false, index: true
      t.timestamps
    end
  end
end

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.date :birthdate, null: false
      t.integer :weight
      t.string :email, null: false
      t.string :profile_pic_url
      t.string :password_digest, null: false
      t.string :session_token, null:false
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique:true
  end
end

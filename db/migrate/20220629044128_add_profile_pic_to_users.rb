class AddProfilePicToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_pic, :string, default: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
    remove_column :users, :profile_pic_url
  end
end

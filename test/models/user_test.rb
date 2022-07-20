# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  firstName       :string           not null
#  birthdate       :date             not null
#  weight          :integer
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  lastName        :string
#  profile_pic     :string           default("https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg")
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

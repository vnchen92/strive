# == Schema Information
#
# Table name: kudos
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  activity_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class KudoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

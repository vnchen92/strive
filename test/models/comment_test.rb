# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  user_id     :integer          not null
#  activity_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  posted_on   :datetime
#
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

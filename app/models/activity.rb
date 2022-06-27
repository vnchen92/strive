# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Activity < ApplicationRecord
    validates :title, :author_id, :posted_on, presence: true

    belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
end

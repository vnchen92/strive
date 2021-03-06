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
class User < ApplicationRecord
    validates :firstName, :birthdate, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :activities,
    class_name: :Activity,
    foreign_key: :author_id

    has_many :followers, 
    class_name: :Follow,
    foreign_key: :following_id

    has_many :follows,
    class_name: :Follow,
    foreign_key: :follower_id

    has_many :comments,
    class_name: :Comment,
    foreign_key: :user_id

    has_many :kudos,
    class_name: :Kudo,
    foreign_key: :user_id

    attr_reader :password

    before_validation :ensure_session_token

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil if @user.nil?
        @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end
end

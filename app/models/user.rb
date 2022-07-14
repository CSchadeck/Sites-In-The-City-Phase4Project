class User < ApplicationRecord
    has_many :facts
    has_many :movies, through: :facts

    has_secure_password
  
    validates :user_name, presence: true, uniqueness: true
end

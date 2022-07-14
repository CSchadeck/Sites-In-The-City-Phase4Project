class Movie < ApplicationRecord
    has_many :facts
    has_many :users, through: :facts

validates :name, :location, :image, presence: true
end

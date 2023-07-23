class Workbook < ApplicationRecord
  has_many :questions
  has_many :user_workbooks
  has_many :users, through: :user_workbooks
end
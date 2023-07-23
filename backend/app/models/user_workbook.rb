class UserWorkbook < ApplicationRecord
  belongs_to :user
  belongs_to :workbook
end
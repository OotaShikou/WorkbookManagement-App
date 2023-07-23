class Question < ApplicationRecord
  belongs_to :workbook
  belongs_to :type

  def self.ransackable_attributes(auth_object = nil)
    ["answer", "content", "created_at", "id", "type_id", "updated_at", "workbook_id"]
  end
end

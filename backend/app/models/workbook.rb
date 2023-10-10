class Workbook < ApplicationRecord
  has_many :questions
  has_many :user_workbooks
  has_many :users, through: :user_workbooks

  def self.ransackable_attributes(auth_object = nil)
    ["id"]
  end

  def self.authorization(user_id, workbook_id_params)
    workbook_id_params = workbook_id_params.to_i
    workbook_ids = Workbook.includes(:users).joins(:users).where('users.id' => user_id).pluck(:id)

    authorization_result = { workbook_ids: workbook_ids, authorization?: workbook_ids.include?(workbook_id_params) }
    authorization_result
  end
end
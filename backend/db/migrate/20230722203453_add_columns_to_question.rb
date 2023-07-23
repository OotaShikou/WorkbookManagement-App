class AddColumnsToQuestion < ActiveRecord::Migration[7.0]
  def change
    add_reference :questions, :workbook, foreign_key: true
    add_reference :questions, :type, foreign_key: true
  end
end

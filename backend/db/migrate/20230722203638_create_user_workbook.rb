class CreateUserWorkbook < ActiveRecord::Migration[7.0]
  def change
    create_table :user_workbooks do |t|
      t.references :user, foreign_key: true
      t.references :workbook, foreign_key: true
      t.boolean :is_teacher, default: false
      t.timestamps
    end
  end
end

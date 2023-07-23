class CreateWorkbook < ActiveRecord::Migration[7.0]
  def change
    create_table :workbooks do |t|
      t.string :title
      t.timestamps
    end
  end
end

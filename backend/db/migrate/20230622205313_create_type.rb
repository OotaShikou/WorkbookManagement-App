class CreateType < ActiveRecord::Migration[7.0]
  def change
    create_table :types do |t|
      t.string :question_format_name
      t.timestamps
    end
  end
end
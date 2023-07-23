class CreateStudentTeacher < ActiveRecord::Migration[7.0]
  def change
    create_table :student_teachers do |t|
      t.references :teacher, foreign_key: { to_table: :users }
      t.references :student, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end

# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :user_workbooks
  has_many :workbooks, through: :user_workbooks

  # User モデルと関連する Teacher との関連付け
  has_many :teacher_relationships, class_name: 'StudentTeacher', foreign_key: 'teacher_id'
  has_many :students, through: :teacher_relationships, source: :student

  # User モデルと関連する Student との関連付け
  has_many :student_relationships, class_name: 'StudentTeacher', foreign_key: 'student_id'
  has_many :teachers, through: :student_relationships, source: :teacher
end

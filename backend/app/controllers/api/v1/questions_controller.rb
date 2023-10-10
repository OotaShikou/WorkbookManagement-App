class Api::V1::QuestionsController < ApplicationController
  before_action :set_question, only: %i[update destroy]
  before_action :authenticate_api_v1_user!
  before_action :authorization_workbook

  def index
    authorization_result = Workbook.authorization(current_api_v1_user.id, params[:workbook_id].to_i)
    workbook_id = params[:workbook_id].to_i ? params[:workbook_id].to_i : 0
    target_workbook_ids = workbook_id == 0 ? authorization_result[:workbook_ids] : workbook_id
    
    q = Question.ransack(workbook_id_in: target_workbook_ids)
    questions = q.result.includes(:type, :workbook).order(:id)
    render json: questions, include: [:type, :workbook]
  end


  def create
    question = Question.new(set_params)
    if question.save 
      render json: question
    else
      render json: question.errors
    end
  end

  def update
    if @question.update(set_params) 
      render json: @question
    else
      render json: @question.errors
    end
  end

  def destroy
    if @question.destroy
      render json: @question
    else
      render json: @question.errors
    end
  end
  
  private

  def set_question
    @question = Question.find(params[:id])
  end

  def set_params
    params.permit(:content, :answer, :workbook_id, :type_id)
  end

  def authorization_workbook
    workbook_id = params[:workbook_id].to_i ? params[:workbook_id].to_i : 0
    authorization_result = Workbook.authorization(current_api_v1_user.id, workbook_id)
    unless authorization_result[:authorization?] || workbook_id == 0
      render json: { error: "権限がないworkbook_idです" }, status: :unprocessable_entity
    end
  end

end
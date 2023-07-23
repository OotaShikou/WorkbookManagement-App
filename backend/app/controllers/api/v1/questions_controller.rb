class Api::V1::QuestionsController < ApplicationController
  before_action :set_question, only: %i[show update destroy]

  def index
    q = Question.ransack(workbook_id_eq: params[:workbook_id])
    questions = q.result.includes(:type, :workbook).order(:id)
    render json: questions, include: [:type, :workbook]
  end

  def show
    render json: @question
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

end
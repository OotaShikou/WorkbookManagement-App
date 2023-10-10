class Api::V1::WorkbooksController < ApplicationController
    before_action :set_workbook, only: [:show, :update, :destroy]
    before_action :authenticate_api_v1_user!
    before_action :authorization_workbook, only: %i[create update destroy]

    def index
      authorization_result = Workbook.authorization(current_api_v1_user.id, params[:workbook_id].to_i)
      target_workbook_ids = authorization_result[:workbook_ids]

      q = Workbook.ransack(id_in: target_workbook_ids)
      workbooks = q.result.includes(:questions, :users).all()
      render json: workbooks, include: [:questions, :users]
    end
  
    def create
      workbook = Workbook.new(workbook_params)
      user = User.find(current_api_v1_user.id)
      user.user_workbooks << workbook
      
      if workbook.save
        render json: workbook, status: :created
      else
        render json: workbook.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @workbook.update(workbook_params)
        render json: @workbook
      else
        render json: @workbook.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @workbook.destroy
      head :no_content
    end
  
    private
  
    def set_workbook
      @workbook = Workbook.find(params[:id])
    end
  
    def workbook_params
      params.require(:workbook).permit(:title)
    end

    def authorization_workbook
      workbook_id = params[:id].to_i ? params[:id].to_i : 0
      authorization_result = Workbook.authorization(current_api_v1_user.id, workbook_id)
      unless authorization_result[:authorization?] || workbook_id == 0
        render json: { error: "権限がないworkbook_idです" }, status: :unprocessable_entity
      end
    end
end
  
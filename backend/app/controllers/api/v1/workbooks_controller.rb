class Api::V1::WorkbooksController < ApplicationController
    before_action :set_workbook, only: [:show, :update, :destroy]
  
    def index
      workbooks = Workbook.all
      render json: workbooks
    end
  
    def show
      render json: @workbook
    end
  
    def create
      workbook = Workbook.new(workbook_params)
  
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
end
  
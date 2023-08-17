class Api::V1::UserWorkbooksController < ApplicationController
    def create
        user = User.find(params[:user_id])
        workbook = Workbook.find(params[:workbook_id])
        
        user.user_workbooks << workbook
        render json: { message: "UserWorkbook created successfully" }, status: :created
    end
end
  
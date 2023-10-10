class Api::V1::TypesController < ApplicationController
    before_action :authenticate_api_v1_user!

    def index
      types = Type.all
      render json: types
    end
end
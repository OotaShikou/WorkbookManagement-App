Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :questions, only: %i[index show create update destroy]
      resources :workbooks, only: %i[index show create update destroy]
      resources :user_workbooks, only: %i[craete]

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
    end
  end
end

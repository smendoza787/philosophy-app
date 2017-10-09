Rails.application.routes.draw do
  namespace :api do
    resources :philosophers
    resources :quotes
  end
end

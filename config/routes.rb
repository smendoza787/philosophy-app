Rails.application.routes.draw do
  namespace :api do
    resource :philosophers
    resource :quotes
  end
end

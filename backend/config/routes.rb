Rails.application.routes.draw do
  resources :markers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/test', to: 'application#test'

end

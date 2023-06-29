Rails.application.routes.draw do

  post '/signup', to: 'users#create'
  get '/users', to: 'users#index'
  patch '/users/:id', to: 'users#update'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  patch '/books/vote', to: 'books#vote'
  patch '/books/finish',to: 'books#finish'
  post '/books/review',to: 'books#review'
  resources :books, only: [:index,:update,:create, :destroy]
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

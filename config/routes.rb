Rails.application.routes.draw do

  post '/signup', to: 'users#signup'
  post '/create', to: 'users#create'
  post '/google-create', to: 'users#google_create'
  post '/google-signup', to: 'users#google_signup'
  get '/users', to: 'users#index'
  patch '/users/finish',to: 'users#finish'
  patch '/users/:id', to: 'users#update'
  get '/me', to: 'users#show'
  post '/google', to: 'sessions#google'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  patch '/books/vote', to: 'books#vote'
  patch '/books/finish',to: 'books#finish'
  get '/books/favorite', to: 'books#favorite'
  resources :reviews, only: [:create,:update,:destroy]
  resources :books, only: [:index, :update, :create]
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

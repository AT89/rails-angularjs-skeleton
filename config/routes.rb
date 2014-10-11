Rails.application.routes.draw do
  root "angular_templates#index"
  get '*path' => 'application#index'
end

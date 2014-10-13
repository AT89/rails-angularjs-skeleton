Rails.application.routes.draw do
  api_version(:module => "V1", :path => {:value => "v1"}, :defaults => {:format => "json"}) do
    get '/locations' => 'locations#index'
  end
  root "angular_templates#index"
  get '*path' => 'application#index'
end

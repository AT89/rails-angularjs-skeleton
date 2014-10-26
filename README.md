rails-angularjs-skeleton
========================

### 1. Gemfile
#### Backend
  * [Rails 4.1.0](https://rubygems.org/gems/rails)
  * API Versioning: [versionist ~> 1.3.0](https://rubygems.org/gems/versionist)
  * JSON Templating: [JBuilder ~> 2.2.2](https://github.com/rails/jbuilder)
  * Server: [thin ~> 1.6.3](https://rubygems.org/gems/thin)
  * Users and authentication:
    - [devise](https://rubygems.org/gems/devise)
    - [simple_token_authentication](https://rubygems.org/gems/simple_token_authentication)
  * Testing
    - [rspec-rails ~> 3.0.0](https://rubygems.org/gems/rspec-rails)
    - [factory_girl ~> 4.4.0](https://rubygems.org/gems/factory_girl)

#### Frontend
  * Through [bower-rails ~> 0.9.0](https://rubygems.org/gems/bower-rails)
    - [angular (1.x)](https://github.com/angular/angular.js)
    - [ui-router](https://github.com/angular-ui/ui-router)
    - [restangular](https://github.com/mgonto/restangular)
    - [underscore](https://github.com/jashkenas/underscore)
  * [bootstrap-sass ~> 3.2.0.2](https://rubygems.org/gems/bootstrap-sass)
  * [jQuery](https://rubygems.org/gems/jquery-rails)

### 2. To get up and running
  1. Make sure the bower components are installed by running `rake bower:install`.
  2. Make .yml files from config/database.yml.example and config/secrets.yml.example (generate keys for secrets.yml using `rake secrets`).
  3. Run the migrations (`rake db:migrate`).
  4. Things to rename to match your app's name:
    - The module name in ./config/application.rb.
    - The session store key name in ./config/initializers/session_store.rb.
    - The main layout's title in ./app/views/layouts/application.html.erb.

### 3. Other
  * Configure SSL as it is not enforced in this skeleton.
  * See [versionist](https://github.com/bploetz/versionist) for API versioning. Common tasks:
    - Create a new version

      `rails g versionist:new_api_version <name> <module namespace> --path=value:<name> --defaults=format:json`
    - Copy a version

      `rails g versionist:copy_api_version <old version> <old module namespace> <new version> <new module namespace>`
    - New controller

      `rails g versionist:new_controller <name> <module namespace>`

### 4. References
  * [todo-rails4-angularjs](https://github.com/mkwiatkowski/todo-rails4-angularjs).
  * [Setting up an AngularJS and Rails 4.1 Project](http://start.jcolemorrison.com/setting-up-an-angularjs-and-rails-4-1-project/).
  * [REST API Versioning](http://railscasts.com/episodes/350-rest-api-versioning).
  * [Securing an API](http://railscasts.com/episodes/352-securing-an-api).
  * [JSON API Authentication using Devise tokens](http://provoost.tumblr.com/post/80873086965/json-api-authentication-using-devise-tokens)
  * https://github.com/fnakstad/angular-client-side-auth

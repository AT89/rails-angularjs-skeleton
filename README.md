rails-angularjs-skeleton
========================

### 1. Gemfile
#### Backend
  * API Versioning: defaults to [versionist ~> 1.3.0](https://rubygems.org/gems/versionist).
  * JSON Templating: defaults to [JBuilder ~> 2.2.2](https://github.com/rails/jbuilder).
  * Server: [thin ~> 1.6.3](https://rubygems.org/gems/thin).

#### Frontend
  * 

### 2. To get up and running
  1. Make sure the bower components are installed by running `rake bower:install`.
  1. Make .yml files from config/database.yml.example and config/secrets.yml.example (generate keys for secrets.yml using `rake secrets`).
  2. Things to rename to match your app's name:
    - The module name in ./config/application.rb.
    - The session store key name in ./config/initializers/session_store.rb.
    - The main layout's title in ./app/views/layouts/application.html.erb.

### 3. Other
  * See [versionist](https://github.com/bploetz/versionist) for API versioning. Common tasks:
    - Create a new version

      `rails g versionist:new_api_version <name> <module namespace> --path=value:<name> --defaults=format:json`
    - Copy a version

      `rails g versionist:copy_api_version <old version> <old module namespace> <new version> <new module namespace>`
    - New controller

      `rails g versionist:new_controller <name> <module namespace>`
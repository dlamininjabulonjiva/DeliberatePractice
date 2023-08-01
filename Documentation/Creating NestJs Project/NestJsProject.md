# Install the CLI globally
	npm install -g @nestjs/cli@latest
# Creating a new project
	nest new (project name)
# Running the application
	npm run start:dev
# Create new module
	nest generate module (module name)
# Create new controller for a module
	 nest generate controller (module name)
# Create new service for a module
	nest generate service (module name)
# Generate entire resource along with controllers and providers
	nest generate resource (resource name) --dry-run(optional)
# Adding class validater and class transformer
	npm i --save class-validator class-transformer
# Adding a Guard
	nest g guard (module name/folder)
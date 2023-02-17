# AngularStarterPack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## Containerizing the app using docker
Please find the `DockerFile` to understand the docker composition, 
1. Use of Node 16 Alpine as base, 
2. Install Angular CLI 
3. Do execute `ng build` command to generate a production build of angular
4. Copy all the files to the docker build image
5. Use of NGINX to serve the client files ( NGINX 1.7)
6. Move all the build files generated at step 3 to the nginx

Now the docker build file is ready, lets generate a build out of it

`docker build -t <image_name> -f DockerFile .`

Note: DockerFile is the name of the docker build file, it is just the name of the file, please feel free to change it

## Running the docker build file
Execute `docker run -d -p 80:80 <image_name>`

Note:<image_name> is the name set to the build image in previous step.

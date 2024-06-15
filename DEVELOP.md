# Project Setup

## Create Applications
Generates a new basic application definition in the "projects" subfolder of the workspace.
```
ng g application app2-restaurant
ng g apllication app3-orders
```

## Create Webpack config files

First App
```
touch webpack.config.ts
touch webpack.config.prod.ts
```

Second App
```
touch projects/app2-restaurant/webpack.config.ts
touch projects/app2-restaurant/webpack.config.prod.ts
```

Third App
```
touch projects/app3-orders/webpack.config.ts
touch projects/app3-orders/webpack.config.prod.ts
```

## Install Custom Webpack

```
npm i -D @angular-builders/custom-webpack@16.0.2-beta.2
```

## Update Angular.json File

1. Update the Architect targets for Browser and Serve to use custom builder insted of Angular's default builder.

2. Use your custom Webpack configuration file webpack.config.ts and webpack.config.prod.ts

3. Share default styles across projects.

4. Set a default port for each project.

### Update Root App

angular.json
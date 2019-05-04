# Webpack Starter

This is an empty webpack project with useful features already set up.

##### Libraries
  - jQuery
  - jQuery.ScrollTo
  - lodash
  - Bootstrap

##### Development tools
  - ES6 support
  - eslint (with airbnb preset)
  - SASS
  - postcss (with autoprefixer and cssnano)

## Installation

```
yarn # or npm install
```
> If you want to use npm, edit the `.gitignore` file and ignore `yarn.lock` instead of `package-lock.json`.

## Available commands

#### Development server
```
npm run start
```

by default, files are served at [localhost:8080](http://localhost:8080), you can edit these options in the `devServer` section of the `webpack.config.js` file.

#### Development build
```
npm run build
```

This generates a build for development, generated files are available in `dist` folder.

#### Production build
```
npm run build:prod
```
This generates the production build, with uglified JS, minified and prefixed CSS.

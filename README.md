# Webpack Starter

This is an empty webpack project with a useful features already set up.

##### Libraries
- jQuery
- jQuery.ScrollTo
- Bootstrap

##### Development tools
- ES6
- eslint (with airbnb preset)
- SASS
- postcss (with autoprefixer and cssnano)

## Installation

```
npm install
```
or
```
yarn
```


## Available commands

#### Development server
```
npm run dev
```

by default, files are served at [localhost:8080](http://localhost:8080), you can edit these options in the `devserver.config.js` file.

#### Development build
```
npm run build
```

This generates a build for development, generated files are available in `dist` folder.

#### Production build
```
npm run prod
```
This generates the production build, with uglified JS, minified and prefixed CSS.

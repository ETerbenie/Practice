Webpack + React Starter App
-----------------------------
# Project Structure
.
+-- src
|   +-- js
|       +-- container
|           +-- App.js
|       +-- components
|           +-- TestReactComponent 
|               +-- index.js
|               +-- TestReactComponent.scss
|   +-- html
|       +-- index.html
|   +-- styles
|       +-- global.scss

## Day One
- Set up git and git repo `git init`
- Set up `.gitignore` to prevent _node_modules_ and _.vs_ from being checked in.
- Set up npm which created package.json `npm init`
- Installed several dependencies
    - webpack
    - react
    - react-dom
    - babel
        - babel-core
        - babel-preset-env
        - babel-preset-react
    - webpack dev server
    - loaders
    - more...
- Set up webpack config @ `/webpack/webpack.config.js`
- Let our app run inside `./src` directory
- Set up webpack dev server
- Set up webpack file aliases so we dont have to use `../../ComponentName` imports
- Set up SCSS loader so we can import scss files in our js
- Set up .babelrc 

## Notes
Package JSON Versioning - https://semver.org/
major - minor- patch

alias, add in webpack and babel 

npm run dev

npm i --save-dev style-loader css-loader sass-loader

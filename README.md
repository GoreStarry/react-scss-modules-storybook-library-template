# react-scss-modules-storybook-library-template

template to create reusable react components

* `create-react-app` based
  * CSS modules
  * SASS(SCSS)
* `Storybook` set by preset-create-react-app
* build package bundle by `Rollup.js`
* generate storybook site and also create default App page to `docs` folder
---
## `Ｗarning...`
### can't write JSX in `.js` file, use `.jsx` instead

It's Rollup.js bundle error... you can try to fix it and create a pull request THX~~

---
## Available Scripts

In the project directory, you can run:

### `npm run build`
* bundle components package to `dist` folder
* create App index page to `docs` (default ignored)
* storybook site to `docs/storybook`

### `npm run dev`
* watch package rollup bundle
* watch storybook

---
## Inspired by 
* [Creating a React Component Library using Rollup, Typescript, Sass, and Storybook by Harvey Delaney](https://blog.harveydelaney.com/creating-your-own-react-component-library/)

Setup ESLint on Visual Studio Code
==================================

## Setup

```bash
npm init -f
npm install -g eslint
eslint --init
```

Install the following extensions into Visual Studio code:
- Name: ESLint
Id: dbaeumer.vscode-eslint
Description: Integrates ESLint JavaScript into VS Code.
Version: 2.1.5
Publisher: Dirk Baeumer
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Reference
- Airbnb JavaScript Style Guide
    https://github.com/airbnb/javascript
```
> eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? CommonJS (require/exports)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Node
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1 port@^2.20.1
? Would you like to install them now with npm? Yes                                     v-2020\dev-2020-nodejs-eslint
Installing eslint-config-airbnb-base@latest, eslint@^5.16.0 || ^6.8.0, eslint-plugin-import@^2.20.1
```
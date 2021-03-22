# BetaRemitTodoApp Challange

## Introduction

This project repo contains the source code(check dev branch) for the [ **BetaRemit - Front End Recruitment Challenge** ](https://gitlab.com/beta.remit/frontend-test/-/tree/master), which consisted of building a mobile application for managing notes.

## Stack and Library used

- [React-native 0.64](https://reactnative.dev/) - JS framework used for building mobile applications.
- [Redux](https://redux.js.org/) - JS Lib for managing application state, used in CRUD of the Notebooks and notes.
- [moment](https://momentjs.com/) - JS Lib for managing datetime, used in datetime calculations.
- [react-native-globalize](https://github.com/joshswan/react-native-globalize) - react-native for managing internalization, used in the transaltion of the mobile application .

## Installation

This requires [Node.js](https://nodejs.org/) v10+ and [React-native basic setup](https://reactnative.dev/) to run.

After cloning the next step is installing the dependencies and devDependencies and start the server.

```sh
 yarn install
```

## Development

Open your favorite Terminal and run these commands.

First Tab:

```sh
yarn start
```

Second Tab:

```sh
yarn android
```

#### Building for for production

For production release:

```sh
yarn react-native run-android --variant=release
```

## License

MIT

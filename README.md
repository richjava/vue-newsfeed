# vue-newsfeed

> A Vue.js single page news feed application with partial favourites functionality. The news feed is getting articles from NewsAPI and the favourites are coming from a Firebase database.

The app demonstates use of Vue components, vue-router, vue-resource and vuefire (Firebase).

## TODO
The News Feed should remember which articles have been favourited.
and the collections are currently not synced with each other.

## Getting started
You will need a db.js file in the app directory:

````
import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({<YOUR_FIREBASE_DB_CONFIG_GOES_HERE>});
export const db = firebaseApp.database();
````

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

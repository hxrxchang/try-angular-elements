#!/bin/sh
yarn ng build --prod --output-hashing=none &&
cat dist/try-angular-elements/runtime.js dist/try-angular-elements/polyfills.js  dist/try-angular-elements/main.js > preview/angularapp.js

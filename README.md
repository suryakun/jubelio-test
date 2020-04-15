## Jubelio test - Surya

### Requirement
```
NodeJS version 12.6.0
Yarn version 1.17.3
Postgres version 11.4

```

### How to start?
- Update the database credential at `./server/config`
- Make sure you already create the database in your postgres
- run command `yarn dev`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn migrate`

Migrate the database schema

### `yarn seed`
Do a request to elevenia to retrieve the products

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

Cheers!

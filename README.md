# The Orchid Blog

## Development server

Install all of the dependencies using `yarn install`.

Run `npm run start` for a development server. Navigate to
`http://localhost:8000/`. The app will automatically reload if you
change any of the source files.

> Watch out! If you run this the contents of the public directory will be overwritten, which are currently used to serve the site!

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `public/` directory. No need to specify a production build.

To test that the build worked correctly, run `node server.js` and navigate to `http://localhost:8001`.


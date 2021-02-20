# happy-project



## Desktop version
- react.js
- typescript
- react-icons
- react-router-dom
- leaflet / react-leaflet
- mapbox

## Backend
- typescript
- express
  - express-async-errors (shows erros during api response async-await)
- ts-node-dev
- typeorm + sqlite3 
  - create migrations: (**it's already done**) 
    - yarn typeorm migration:create -n create_orphanages (it will create a file in migrations folder to use the migration up/down below)
    - yarn typeorm migration:create -n create_images 
  
  - migration up:   yarn typeorm migration:run (it will execute the migration created above and create the tables in database.sqlite)
  - migration down: yarn typeorm migration:revert
  - to view database: Beekeeper Studio app
- yup (data validation)
- cors (allow access from different domains)
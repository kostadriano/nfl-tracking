# nfl-tracking

This project was made to learn VUE.JS. Here you can:

* See all NFL active teans from sports.io API.
* Add a new team to a local database
* Edit, Delete and see your teams


## Project setup
To make the project setup follow the next steps in your terminal

```
cp .env.sample .env
cp db.sample.json db.json

yarn install
```

Then add your [NFL sports.io data api key](https://sportsdata.io) on the `VUE_APP_API_KEY` key present in the `.env` file.

## Running project
To run this project just tip

```
yarn run serve
```

This will run your client on port 8080 and your json-server on port 3000.

## Compiles and minifies for production
```
yarn run build
```

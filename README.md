# movies_db_frontend

## Prerequisite to run the application

* Docker & Docker Compose

## To start the frontend app

* Provide Algolia application ID and search API key 

    Add a file named `.env.production` in the root directory of the project with the following content

```sh
NODE_ENV=production
VUE_APP_APP_KEY=YOUR_APPLICATION_ID
VUE_APP_SEARCH_KEY=YOUR_SEARCH_API_KEY
```

* Build the images

```sh
docker-compose build
```
* Start the containers 

```sh
docker-compose up -d
```
* Stop the containers 

```sh
docker-compose down
```
Now the backend app is available at [`localhost:8080`](http://localhost:8080)

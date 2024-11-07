# Prismis APIs

## Requirements

- Node js

> I am using node version `22.3.0`

## Getting Started

- Clone the project - `git clone https://github.com/rasif-sahl/primis-tracking-api.git`
- Then run - `cd primis-tracking-api`
- To install the dependencies run - `npm install`
- Copy the variable in the `env-example` file.
- Create `.env` file and then add the copied variable here and replace them with your own values.
- To run the project - `npm run start` or `npm start`
- By default you can access the apis with this url - [http://localhost:4000](http://localhost:4000) 
- If you need to change the api endpoint you can do it in the `.env` file.

## Commands (Test)

- `curl -H "Authorization: your_secure_api_key" -H "Content-Type: application/json" http://localhost:4000/api/tracking` run this command to check the api

- `curl -H "Authorization: your_secure_api_key" -H "Content-Type: application/json" http://localhost:4000/api/tracking/page/65f1888eca763954f8e1ca06`

## Endpoints

I have created 02 endpoints one is to get the list of trackings. and other is to get single tracking information

- Tracking list - `http://localhost:4000/api/tracking`
- Single tracking info - `http://localhost:4000/api/tracking/page/65f1888eca763954f8e1ca06`

## Note

- In the front end application only the single tracking info route is been used.
- The API key that you are using in the express API should match with the front-end this to work properly.

## File Structure

Folder | Contents
-------|---------
`config` | Initially when i was starting this project I thought we need to connect it with the database. so configuration files are been added here
`controllers` | All the controller related functions are included here. The is been used as a bridge between the routes and the services.
`data` | All the static data is been included here 
`middleware` | Route authentication related middlewares are been included here.
`routes/` | The api routes are been included here.
`services` | Initially was planning to add the db queries here. But now I am using this to speak with the json object array
`app.js` | This is the root file. And this is where this application starts.
`env-example` | All the environment variable name are been added here.
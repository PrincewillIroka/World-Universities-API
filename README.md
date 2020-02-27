# World-Universities-API
This is a Nodes JS based REST API built with Hapi to provide information for thousand of top universities around the world.

## Usage

### Setup
- Clone this repo. Go into the root folder and run *yarn* to install the dependencies.
- Create a .env file in the root folder of the project.
- In the .env file for the API, set NODE_ENV either as 'dev' or 'production' depending on your environment and set PORT too e.g 4500
- Run *yarn start* to start the server (API).

### API Endpoints
  - POST /getUniversitiesByName \
    **Note:** Pass these parameters to this route: \
    1.) name: (String) e.g Harvard \
    2.) index: (int) e.g 0 \
    3.) number: (int) e.g 10
    
  - POST /getUniversitiesByCountry \
    **Note:** Pass these parameters to this route: \
    1.) name: (String) e.g Nigeria \
    2.) index: (int) e.g 0 \
    3.) number: (int) e.g 15
  

## Credit
https://github.com/Hipo/university-domains-list

# World-Universities-API
This is a Nodes JS based REST API built with Hapi to provide information for thousand of top universities around the world.
It's hosted at https://world-universities-api.herokuapp.com/

## Usage
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

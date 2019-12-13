# How to run the project

- Install [node.js](https://nodejs.org/en/) on your computer if you don't have it already

- Install dependencies by running the command below

  ```npm install```

- Run the project

  ```npm start```

  The app will start running on the port 3000

  # Endpoints 

  ## Update vehicle location

    - POST /location

    Sample request body
    ```
      {
	    "vehicleId": "V4",
	    "location": "6"
      }
    ```
  
    ## Get last five locations for a given vehicle

    - GET /location/:id



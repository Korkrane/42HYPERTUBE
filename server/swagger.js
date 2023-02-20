export default {
  "swagger": "2.0",
  "info": {
    "title": "Example API",
    "version": "1.0.0"
  },
  "host": "localhost:3000",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/": {
      "get": {
        "description": "Returns Hello World",
        "responses": {
          "200": {
            "description": "Successful response",
            "schema": {
              "type": "string",
              "example": "Hello World"
            }
          }
        }
      }
    }
  }
}
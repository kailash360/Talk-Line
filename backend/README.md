# Social Media Backend

## About

This is the backend of social media application.

## Routes

The routes for the application are:

- /api

    - /register
        - Register a new user
        - Method: POST
        - Request:
        ```json
            username:
            email:
            password:
        ```
    - /authenticate
        - Log into the application
        - Method: POST
        - Request: 
        ```json
            email:
            password:
        ```
    - /user
        - Fetch details of the user
        - Method: GET
    - /follow/:id
        - Follow another user with given `id`
        - Method: POST
    - /unfollow/:id
        - Unfollow a user with given `id`
        - Method: POST
    - /all_posts
        - Fetch all posts of the user
        - Method: GET
    - /posts
        - Create a new post
        - Method: POST
        - Request:
        ```json
            title:
            description:
        ```
    - /posts/:id
        - Delete a post
        - Method: DELETE
    - /like/:id
        - Like a post
        - Method: POST
    - /unlike/:id
        - Unlike a post
        - Method: POST
    - /comment/:id
        - Comment on a post
        - Method: POST
        - Request:
        ```json
            comment:
        ```
    
## Tech Stacks

- NodeJS
- ExpressJS
- MongoDB

## Live URL

> https://social-media-backend-360.herokuapp.com/

## Setting Up Locally

- Make sure you have `NodeJS 16.0+` installed lcoally on your device
- Create a `.env` file in the root directory of the project and copy the contents of `.env.example` into it
- Fill in the values of environment variables in the `.env` file
- Install dependencies using the following command
```sh
npm i 
```
- Start the application using the following command
```sh
npm start
```
- Go to [localhost:5000](localhost:5000) and the server will be up and running

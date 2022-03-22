# litterate-tech
social media application for serious techies

## Installation and Setup

- install [Node.js](https://nodejs.org/en/download/) and [MySql](https://www.mysql.com/downloads/)
- `git clone` and `cd` to litterate-tech
- `npm install`

## Features

- database includes `users` and `thoughts` schema 
- `thoughts` and `reactions` are sub-documents to `users` and `thoughts`, respectively
- modularized codebase for scalability
- schema validation

## Usage

Currently this is the back-end API codebase only. To test the routes:

1. Install [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download)
2. From the app directory, `node server.js` to start the server on your computer on port 3001
3. In Postman or Insomnia, enter the `GET`, `POST`, `PUT`, or `DELETE` route you wish to test and the requisite JSON data (for POST and PUT routes); e.g., 

## Routes

### Users Routes

`/api/users`

- POST a user
- GET all user

### Single User Routes

`/api/users/:id`

- GET single user
- PUT (update) a user
- DEL (delete) a user

### Friends Routes

`/api/users/:id/friends/:friendId`

- POST (add) a friend
- DELETE a friend

### Thought Routes

`/api/thoughts`

- POST (add) a thought
- GET all thoughts

### Single Thought Routes

`/api/thoughts/:id`

- GET a single thought
- PUT (update) a single thought
- DEL (delete) a thought

### Reaction Routes

`/api/thoughts/:id/reactions`

- POST a reaction
- DELETE a reaction

## Video Demonstration

Video Demonstration of Installation and Usage
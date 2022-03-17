# litterate-tech
social media application for serious techies

## Installation and Setup

- install [Node.js](https://nodejs.org/en/download/) and [MySql](https://www.mysql.com/downloads/)
- `git clone` and `cd` to eCommerce-Server-Express
- `npm install`

## Features

- Database includes `thoughts` and `reactions`
- Modularized codebase for scalability

## Usage

Currently this is the back-end API codebase only. To test the routes:

1. Install [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download)
2. From the app directory, `node server.js` to start the server on your computer on port 3001
3. In Postman or Insomnia, enter the `GET`, `POST`, `PUT`, or `DELETE` route you wish to test and the requisite JSON data (for POST and PUT routes); e.g., 

### User Routes

`/api/users`

### Thought Routes

`/api/thoughts`

### Reaction

`/api/thoughts/:thoughtId/reactions`

## Video Demonstration

Video Demonstration of Installation and Usage
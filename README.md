# philosophy-app :cloud:

- A simple Philosophy resource for finding information on Philosophers, ideas, quotes, etc.

- Built with Ruby on Rails and React

## Instructions For Running

Until I can find a 'single-command' solution for starting a Postgres connection, rails server and react-dev-server in parallel, you have to run these in 3 separate terminals. :/

1. **First Terminal**
  - make sure `postgres` is installed and run `postgres`

2. **Second Terminal**
  - run `rails s -p 3001` to start the API server on port 3001

3. **Third Terminal**
  ```
    cd client
    npm start
  ```

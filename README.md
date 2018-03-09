# REN_Template_Project
React, Express, NodeJS template project (with static content serving, routing)

# Instructions
- Run npm install in root and then in client folder to install all the dependencies before beginning.
- To run in dev, in root, do "npm run dev"
- If everything worked fine, you should see 'Hello World!' and a message from the server on localhost:3006

# Information
- Server runs on port 5000 (change it in server.js)
- React runs on port 3006 (change it in client/.env)
- React Front end proxies all the requests to localhost:5000 (change it in client/package.json, this should match the server port in server.js)
- Different routes can be added to the front end (add routes in client/src/components/router/router.js)
- Use "npm run build" in the client folder to generate production build for client side and then serve static content from server. Currently, the static directory is set to client/build (change it in server.js)
- Happy Coding :)

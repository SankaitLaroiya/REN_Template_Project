# ReactNodeExpress-TemplateProject
React, Express, NodeJS template project (with static content serving, routing)

# Instructions
- Run npm install in root and then in client folder to install all the dependencies before beginning.
- In client folder run: "npm run build". This would create a production ready build folder so that the server can serve the front end statically)
- To run, in root do "node server.js" and go to localhost:5000
- If everything worked fine, you should see 'Hello World!' and a message from the server (served statically)
- Click the link on the page to navigate to another page (can also go to localhost:5000/anotherpage to get to the same page)

# Information
- Server runs on port 5000 (change it in server.js)
- React runs on port 3006 (change it in client/.env). React server is useful in dev to add features and hot-reloading but is not used in production since server serves the static build (client/build).
- React Front end proxies all the requests to localhost:5000 (change it in client/package.json, this should match the server port in server.js)
- Different routes can be added to the front end (add routes in client/src/components/router/router.js)
- Use "npm run build" in the client folder to generate production build for client side after finalizing the front end and then serve static content from server. Currently, the static directory is set to client/build (change it in server.js)
- Happy Coding :)

## Components

The application consist of a React/Redux-based client side and a Feathers-based
server side, that are built using the help of various modules:

* client-side
    * [react](https://github.com/facebook/react)
    * [redux](https://github.com/reactjs/redux/)
    * [react-redux](https://github.com/reactjs/react-redux)
    * [redux-effects](https://github.com/redux-effects/redux-effects)
    * [tiny-duck](https://github.com/lockedon/tiny-duck)
    * [blazecss](https://github.com/BlazeCSS/blaze)
    * [ramda](https://github.com/ramda/ramda)
* server-side
    * [feathers](https://github.com/feathersjs/feathers)

## Development

To run a local development server that live-reloads the client-side code run

    $ cd client
    $ npm start

To run the server-side code locally execute

    $ cd server
    $ npm start

See [client/README.md](./client/README.md) and
[server/README.md](./server/README.md) for details about the client- and
server-side architectures.

## Deployment

Build the image by executing

    $ docker-compose build --force-rm

After running the server container using 

    $ docker-compose up

the web interface can be accessed at http://<docker-machine-ip>:8080.

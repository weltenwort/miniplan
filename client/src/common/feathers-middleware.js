import feathers from 'feathers/client';
import feathersSocketIo from 'feathers-socketio/client';
import feathersHooks from 'feathers-hooks';
import io from 'socket.io-client';
import R from 'ramda';



const getFeathersMeta = R.path(['meta', 'feathers']);

const isFeathersAction = R.pipe(
  getFeathersMeta,
  R.isNil,
  R.not,
)

export default ({ dispatch }) => {
  const feathersSocket = io();
  const feathersApp = feathers()
    .configure(feathersSocketIo(feathersSocket))
    .configure(feathersHooks())

  return (next) => (action) => {
    if (!isFeathersAction(action)) {
      return next(action);
    }

    const { method, params, service } = getFeathersMeta(action);
    const { payload } = action;

    switch (method) {
      case 'create':
        return feathersApp
          .service(service)
          .create(payload, params);
      case 'find':
        return feathersApp
          .service(service)
          .find(params);
      default:
        return Promise
          .reject(`Unknown feathers method: ${service}.${method}`);
    }
  }
}

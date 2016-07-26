const memory = require('feathers-memory');

module.exports = function() {
  const app = this;

  const service = app.service('/activities', memory());
}

'use strict';

const activities = require('./activities');


module.exports = function() {
  const app = this;
  
  app.configure(activities);
};

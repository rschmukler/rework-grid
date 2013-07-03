var mixins = require('rework-mixins');

var grid = {};

grid['grid-column'] = require('./lib/columns.js');
grid['grid-position'] = require('./lib/position.js');
grid['grid-container'] = require('./lib/container.js');

module.exports = function(_, rework) {
  rework.mixin(grid);
};

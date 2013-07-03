var mixins = require('rework-mixins');

var grid = {};

grid['grid-column'] = require('./lib/columns');
grid['grid-position'] = require('./lib/position');
grid['grid-container'] = require('./lib/container');

module.exports = function(_, rework) {
  rework.mixin(grid);
};

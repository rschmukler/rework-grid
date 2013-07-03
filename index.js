module.exports = function(config) {
  var grid = {
    'grid-column'   : require('./lib/columns.js')(config),
    'grid-position' : require('./lib/position.js'),
    'grid-container': require('./lib/container.js')(config)
  };
  return grid;
};

var grid = require('../index.js');

module.exports = function(arg) {
  return {
    'padding': '0px ' + (grid.gutterWidth/2).toString() +'px',
    'width': grid.width + 'px',
    'margin': '0 auto',
    'overflow': 'visible'
  };
};

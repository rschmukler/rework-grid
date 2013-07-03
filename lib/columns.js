var grid = require('../index.js');

module.exports = function(numColumns) {
  var columnWidth = (grid.width - ((grid.numColumns - 1) * grid.gutterWidth)) / grid.numColumns;
  return {
    'width': (numColumns * columnWidth).toString() + 'px',
    'display': 'block',
    'float': 'left',
    'margin-left': (grid.gutterWidth / 2).toString() + 'px',
    'margin-right': (grid.gutterWidth / 2).toString() + 'px',
    'extend': '%clearfix'
  };
};

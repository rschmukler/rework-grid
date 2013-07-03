module.exports = function(grid) {
  return function(numColumns) {
    numColumns = parseInt(numColumns);
    var columnWidth = (grid.width - ((grid.numColumns - 1) * grid.gutterWidth)) / grid.numColumns;
    return {
      'width': ((numColumns * columnWidth) + ((numColumns - 1) * grid.gutterWidth)).toString() + 'px',
      'display': 'block',
      'float': 'left',
      'margin-left': (grid.gutterWidth / 2).toString() + 'px',
      'margin-right': (grid.gutterWidth / 2).toString() + 'px',
      'extend': '%clearfix'
    };
  };
};

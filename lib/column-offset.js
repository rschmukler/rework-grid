module.exports = function(grid) {
  return function(numColumns) {
    var alpha = /alpha/.test(numColumns);
    numColumns = parseInt(numColumns, 10);
    var columnWidth = (grid.width - ((grid.numColumns - 1) * grid.gutterWidth)) / grid.numColumns;
    var marginLeft = (grid.gutterWidth / 2) + (columnWidth * numColumns) + (grid.gutterWidth * numColumns);
    if(alpha)
      marginLeft = marginLeft - (grid.gutterWidth / 2);
    return {
      'margin-left': marginLeft
    };
  };
};

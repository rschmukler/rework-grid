var grid = require('../index.js');

module.exports = function(position) {
  switch(position) {
    case 'centered':
      return {
        'float': 'none',
        'margin': 'auto'
      };
    case 'alpha':
      return {
        'margin-left': '0px'
      };
    case 'omega':
      return {
        'margin-right': '0px'
      };
  }
};

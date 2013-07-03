module.exports = function(position) {
  console.log("Running with position: " + position);
  switch(position) {
    case 'center':
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

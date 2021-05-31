const assertEqual = require('./assertEqual');
   
const findKeyByValue = function(obj, movie) {
  //loop through object properties
  const keys = Object.keys(obj);
  
  
  for (let key of keys) {
    // check if if the value we're looking for
    // if yest return the key
    if (obj[key] === movie) {
      return key;
    } 
  }
  return undefined; //if not found return false
};
module.exports = findKeyByValue;


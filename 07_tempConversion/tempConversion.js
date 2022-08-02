const ftoc = function(f) {
  let formula1 = ((f - 32) * (5/9));
  let rounded = Math.round(formula1 * 10) / 10;
  return rounded;
};
 

const ctof = function(c) {
  let formula2 = ((c * 9/5) + 32);
  let rounded2 = Math.round(formula2 *10) / 10;
  return rounded2;
};
  

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

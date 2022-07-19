function repeatString(string, num) {
    let repeatedString = "";
    while (num > 0) {
      repeatedString += string;
      num--;
    }
    if (num <0){
        return repeatedString = 'ERROR';
    }
    return repeatedString;
  }


  
 

/*
const repeatString = function(word, times) {
    if (times < 0) return 'ERROR';
    let string = '';
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };
 */ 
  module.exports = repeatString;
  

// Do not edit below this line
module.exports = repeatString;

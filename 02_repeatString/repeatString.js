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

 function randomString(string,y){
    let y =  Math.floor(Math.random() * 1000)
    let repeatedString = "";
    while (y >= 0){
        repeatedString += string;
        y--;
    }
    return repeatedString;

 }


  
  repeatString("hey", 10);
  repeatString("hey",0);
  repeatString("hey",-1);
  repeatString("hey",number).match(/(hey)/g).length.toEqual(number);

  

// Do not edit below this line
module.exports = repeatString;

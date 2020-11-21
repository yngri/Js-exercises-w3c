let str = 'qwerty';

if (str.length >= 1 ) { var newStr = str.substring(str.length-1) + str.substring(1, str.length-1) + str.substring(0,1)}
console.log(newStr);
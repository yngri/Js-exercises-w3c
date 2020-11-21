let str = 'JavaScriptqwerty';


function checkString(){
    if(str.substr(4,6)!= 'Script'){return console.log(str)} 
    else {return resultStr = str.split('Script')}

}

checkString(str);

console.log(resultStr.shift() + resultStr.pop());
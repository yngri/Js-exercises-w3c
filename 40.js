function getResult(a,b) {
    if (a===8 || b===8) {console.log('One of the numbers is 8')} 
        else if (a+b===8){console.log('The sum equals to 8')}
            else if (a-b===8 || b-a===8){console.log('The difference equals to 8')}
                else {console.log('No conditions apply')}
}

getResult(17,2);
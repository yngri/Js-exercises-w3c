var getYear = new Date().getFullYear();

if (getYear%4 !== 0){console.log('The year is not a leap year')} 
    else if (getYear%100 !== 0){console.log('The year is a leap year')}
    else if (getYear%400 === 0) {console.log('The year is a leap year')} else {console.log('The year is not a leap year')};
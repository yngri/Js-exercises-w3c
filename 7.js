for (let i=2014; i<=2050; i++){
    let date = new Date(i,0);
    if(date.getDay()===0){console.log('In the year of '+i+ ', 1st of January was/will be a Sunday' )}
};
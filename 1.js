var currentDate = new Date();
const currentDay=currentDate.getDay();

function getReadableDay(currentDay){
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return days[currentDay];
};

console.log('Today is: ' + getReadableDay(currentDay));



var time = new Date();

function getAmPm(h){
    if (h == 24) {
    return '0 AM'
  };

  if (h< 12){
    return h + ' AM'
  };
  
  if (h> 12) {
    return h - 12 + ' PM'
  };

  if (h==12) {
    return '12 PM'
  }
}

console.log('Current time is: ' + getAmPm(time.getHours()) +': ' + time.getMinutes() + ' : ' + time.getSeconds());


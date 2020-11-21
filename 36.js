let a = 9;
let b = 1239;
let c = 29;

// if (a.toString().split('').pop() == b.toString().split('').pop() == c.toString().split('').pop()) {
//     console.log('The last digit of all the integers is the same')}
//     else {console.log('The last digits of the integers are not the same')};

    let lastoneA = ~~a.toString().split('').pop(); 
    let lastoneB = parseInt(b.toString().split('').pop()); 
    let lastoneC = Number(c.toString().split('').pop());
    console.log(lastoneA, typeof lastoneA); 
    console.log(lastoneB, typeof lastoneB); 
    console.log(lastoneC, typeof lastoneC); 
    if (lastoneA === lastoneB && lastoneB === lastoneC) { console.log("three given positive integers are the same"); } 
        else { console.log("no matches found"); }

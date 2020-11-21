function checkLast (a, b, c) {
    return (a % 10 === b % 10) ||
           (a % 10 === c % 10) ||
           (b % 10 === c % 10);
}

console.log(checkLast(123, 453, 789));


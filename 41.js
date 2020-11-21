function getResult (a,b,c) {
    if (a===b && b===c) {
        return 30;
    } 
    
    if(a===b || a===c || b===c){
        return 40;
    }

    return 20;
}

console.log(getResult(3, 3, 3));
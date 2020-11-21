function increaseMode(a,b,c) {
    if (a<b && b<c) {
        return 'Strict mode' 
    }
    
    if (a<= b && b<c || a< b && b <=c || a>= b && a<c) { 
        return 'Soft mode'
    }

    return 'The numbers are equal or not increasing'
}

console.log(increaseMode(24,22,25));

function compareNums (a,b) {

    if ((40<= a && a<= 60) && (40<= b && b<= 60)) { handleCompare(a, b)}
            else { return console.log('One or both of the numbers is not in the range of 40 to 60')};

        function handleCompare(){
            if (a > b) {console.log('Number A is bigger than B')}
                else if (b > a) {console.log('Number B is bigger than A')}
                    else {console.log('The numbers are equal')}
        }
}   

compareNums(40, 50);

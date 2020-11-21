let regularExams = [90, 95, 89, 87, 99];
let finalExams = [90, 89, 95, 90, 93];
let regularSum = 0;
let finalSum = 0;

for (var i = 0; i <= regularExams.length-1; i++) {
    regularSum += regularExams[i]
}

for (var i = 0; i <= finalExams.length-1; i++) {
    finalSum += finalExams[i]
}

if (regularSum / regularExams.length >= 89){console.log('Regular Exams : True. The Average score is 89 or more')} 
    else {console.log ('Regular Exams : False.')}

if (finalSum / finalExams.length >= 90){console.log('Final Exams : True. The Average score is 90 or more')} 
    else {console.log ('Final Exams : False.')}

let currentDate = new Date();
let xmas = new Date ('2020-12-25');


var oneDay = 24 * 60 * 60 * 1000;
var diffDays = Math.round(Math.abs((xmas.getTime() - currentDate.getTime()) / (oneDay)));//math.abs возвратит абсолютное значение числая (модуль)
console.log(diffDays);
// number

const peso1 = 1;
const peso2 = Number("2.0");

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isSafeInteger(peso2))

const avaliacao1 =  9.87;
const avaliacao2 = 6.76;

const total =  avaliacao1 * peso1 + avaliacao2 * peso2;
const media =  total /(peso1 + peso2);


console.log(media.toFixed(2)) // toFixed = define o número de casa decimais 
console.log(media.toString(2))// passando o valor de media em binario


console.log("############################################# Math ###########################");

const raio = 5.6
const area = Math.PI * Math.pow(raio,2);


console.log(area)
console.log(typeof Math)
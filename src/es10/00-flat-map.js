const array =[,1,1,1,12,23, [1,2,36,4, [1,3,5]]];
console.log(array.flat(3));

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v *2]))
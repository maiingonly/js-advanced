// // rest parameter 
// function myfunc(a,b, ...myArgs){
//     return `a = ${a}, b = ${b}, myargs = ${myArgs}`

// }

// console.log(myfunc(1,23,4,5,6,7,7,8));

// function jmlhkan(...angka){
//     return angka.reduce((a,b) => a+b);
// }

// console.log(jmlhkan(1,2,3,4,5));

/* array distructuring */
// const osaca = ['ote', 'sagol', 'gembul', 'pledre', 'cipen'];
// const [ketua, wakil, ...anggota] = osaca;
// console.log(anggota);

/* obect distructuring */
// const wong = {
//     pm : 'ucup',
//     frontend : 'otong',
//     backend : 'supri',
//     ux : 'mario',
//     devops : 'surucup'
// }
// const {pm, devops, ...team} = wong;
// console.log(team);

function filterBy(type, ...values){
    return values.filter(v => typeof v === type)
}
console.log(filterBy('string', 1,2,5,6,'makan', 'minum', false, true, 'belajar'));
// distructuring variable / Assignment

// distructuring array
// const iya = [1, 2, 3, 4];

// // const [satu, dua, tiga, empat] = iya;

// // skiping items
// const [satu, , , empat] = iya;

// Swap items

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];

// console.log(values);

// Distructuring object
// const hero = {
//     nama: 'ucup',
//     hp: 300,
//     damage: 10
// }

// const {
//     nama: n,
//     hp,
//     damage: dmg
// } = hero;

// memberi nilai default + assignment variable baru

// const hero = {
//     nama: 'ucup',
//     hp: 300,
//     damage: 10,

// }

// const {
//     nama: n,
//     hp,
//     damage: dmg,
//     defence: deff = 10
// } = hero;
// console.log(deff);

/* Rest parameter sama dengan Rest Parameter di distructring array */

// Mengambil field pada object , setelah dikirim sebagai paremeter untuk function
const hero = {
    nama: 'ucup',
    hp: 300,
    damage: 10,

}

function getItm({
    nama,
    hp
}) {
    return `hero = ${nama}, hp = ${hp}`;
}

console.log(getItm(hero));
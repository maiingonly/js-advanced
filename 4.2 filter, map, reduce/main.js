const angka = [3, 5, 8, 3, -2, -5, 8, 9, -7, 7, 6, 9, 4, 5, 5, 9];
// mencari angka >= 3
//for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

//filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// kalikan semua nagka dengan 4
// const newAngka = angka.map(a => a * 4);
// console.log(angka);
// console.log(newAngka);

// Reduce 
// jumlah setiap elemen pada array
// const newAngka = angka.reduce((acc, curr) => acc + curr /* , disini secara default nilai awal 0 */ );
// console.log(newAngka);

// method chaining
// cari angka  > 5
// kalikan 3
//jumlahkan

// const hasil = angka.filter(a => a > 5)
//     .map(a => a * 3)
//     .reduce((acc, cur) => acc + cur);
// console.log(hasil);
// const hasil = angka.filter(a => a > 5)
//     .reduce((acc, cur, a) => (acc + cur) / a);

// console.log(hasil);
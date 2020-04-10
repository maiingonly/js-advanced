/* Spread operator 
memecah iterabels menjadi single elemen */

// const sntr = ['ucup', 'otong', 'supri'];
// console.log(...sntr);

// untuk menggabungkan array

// const sntr = ['ucup', 'otong', 'supri'];
// const book = ['kitab', 'kamus', 'novel'];
// const acak = [...sntr,'bolpoin', ...book];
// console.log(acak);

// untuk mengcopy array 

// const sntr = ['ucup', 'otong', 'supri'];
// // const sntr1 = [];
// // sntr1[0] = 'mario';
// const sntr1 = [...sntr, 'fajar'];
// console.log(sntr1);


// const li = document.querySelectorAll('li');
// // const nama = [];

// // for(let i = 0; i < li.length; i++){
// //     nama.push(li[i].textContent);
// // }
// const nama = [...li].map(n => n.textContent);
// console.log(nama);

// contoh lain 

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
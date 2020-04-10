// // function expression
// const tampilNama = function (nama) {
//     return `halo ${nama}`
// }
// console.log(tampilNama('maiing'))

// implisit return 
// const cetak = nama => `halo ${nama}`;
// console.log(cetak('maiing'));

// let hero = ['ucup surucup', 'otong surotong', 'supri'];

// // let jumlahHuruf = hero.map(function (nama) {
// //     return nama.length;
// // })
// // console.log(jumlahHuruf);

// // let jumlahHuruf = hero.map(nama => nama.length);
// // console.log(jumlahHuruf);

// let jumlahHuruf = hero.map(nama => ({
//     nama,
//     jml: nama.length
// }));
// console.table(jumlahHuruf);


/* konsep this tidak ada dalam arrow function */

// konsep this pada arrow function 

// constructor function
// const Hero = function () {
//     this.nama = 'ucup';
//     this.dmg = 10;
//     this.hello = () => {
//         console.log(`hallo, ${this.nama}, damage :${this.dmg}`)

//     }

// }
// const ucup = new Hero();


// const Hero = function () {
//         this.nama = 'ucup';
//         this.dmg = 10;
//         this.hello = function() {
//             console.log(`Mega kill, ${this.nama} damage :${this.dmg}`);
//         }
//         setInterval(()=>{

//         })
//     }
//     const ucup = new Hero();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});
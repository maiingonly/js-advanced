// distructuring 

// function kal(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kal(1, 2);
// console.log(tambah);

// function kal(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b,
//     }
// }

// const {
//     kali,
//     bagi,
//     kurang,
//     tambah
// } = kal(2, 2);

// console.log(kali);


// distructuring function argument
const empl = {
    nama: 'maiing',
    email: 'maherboleax@gmail.com',
    umur: 22,
    nilai: {
        n1: 52,
        n2: 70,
        n3: 90
    }
}

function cetak({
    nama,
    umur,
    nilai: {
        n1,
        n2,
        n3
    },
    email
}) {
    return `hallo nama saya ${nama}, umur ${umur} tahun. nilai terakhir ${n3}, kontak email saya ${email}`;
}

console.log(cetak(empl));
console.log('\n');
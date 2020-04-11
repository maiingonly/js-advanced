// Calback
// Synchronous callback
// function halo(nama){
//     alert(`halo, ${nama}`);
// }
// function tampilkanPesan(call){
//     const nama = prompt('masukan nama:');
//     call(nama);
// }

// tampilkanPesan(nama => alert(`halo, ${nama}`));

const mhs =[ {
    "nama":"maher zaenudin",
    "id":"19283",
    "email":"maherboleax@gmail.com",
},
{
    "nama":"ucup",
    "id":"12334",
    "email":"ucup@gmail.com"
},
{
    "nama":"mario",
    "id":"17733",
    "email":"mario@gmail.com"
}]
console.log("mulai");
mhs.forEach(m => console.log(m.nama));
console.log("selesai"); 
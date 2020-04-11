// Calback
// Synchronous callback
/* function halo(nama){
    alert(`halo, ${nama}`);
}
function tampilkanPesan(call){
    const nama = prompt('masukan nama:');
    call(nama);
}

tampilkanPesan(nama => alert(`halo, ${nama}`)); */

// const mhs =[ {
//     "nama":"maher zaenudin",
//     "id":"19283",
//     "email":"maherboleax@gmail.com",
// },
// {
//     "nama":"ucup",
//     "id":"12334",
//     "email":"ucup@gmail.com"
// },
// {
//     "nama":"mario",
//     "id":"17733",
//     "email":"mario@gmail.com"
// }]
// console.log("mulai");
// mhs.forEach(m => console.log(m.nama));
// console.log("selesai");

// Asynchronous callback
/* function getDataMahasiswa(url, succses, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                succses(xhr.response);
            }else if (xhr.status === 404){
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}
console.log('mulai');
getDataMahasiswa('data/mahasiswa.json', results => {
    const mhs = JSON.parse(results);
    mhs.forEach(m => console.log(m.nama));
} ,() => {
});
console.log('selesai'); */

/// jquery (library external .. sebenarnya nanti didalam vanilla js sudah ada fungsi baru untuk menggantikan ajax namanya "fetch")
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');
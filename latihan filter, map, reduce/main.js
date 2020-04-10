// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil masing masing durasi
    .map(item => item.dataset.duration)

    // ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

    //jumlah semua detik
    .reduce((total, detik) => total + detik);

// ubah formanya jadi jam menit detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - jam * 3600;
const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;
//simpan di dom

const pDurasi = document.querySelector('.total-durasi');
const pJmlvid = document.querySelector('.jumlah-video');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;

const jmlVid = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
pJmlvid.textContent = `${jmlVid} Videos.`;
//2. looping condisionals
// const gombal = [{
//         baju: 'sekolah',
//         ukuran: 'M',
//     },
//     {
//         baju: 'kantor',
//         jenis: 'jas',
//         ukuran: 'xl',
//     },
//     {
//         baju: 'kaos',
//         ukuran: 'l',
//     }
// ];


// const el = `<div class="gombal">
//     ${gombal.map(m => `<ul>
//         <li>Baju :${m.baju}</li>
//         ${m.jenis ? `<li>Jenis Kain: ${m.jenis}</li>` : ''}
//         <li>Ukuran :${m.ukuran}</li>
//     </ul>`).join(``)}
// </div>`;

//nested
const toko = {
    nama: `Gomart`,
    cabang: 20,
    produk: [
        `Mie Go`, `Go-tissue`, `Go-Water`, `Go-snack`,
    ]

};

function cetakProduk(produk) {
    return `
        <ol>
            ${produk.map(p => `<li>${p}</li>`).join('')}
        </ol>
    `;
}

const el = `<div>
    <h2>${toko.nama}</h2>
    <span class="cabang">Cabang : ${toko.cabang}</span>
    <h4>Produk : </h4>
    ${cetakProduk(toko.produk)}
</div>`;

document.body.innerHTML = el;
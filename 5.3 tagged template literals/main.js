//tagged templates
// const nama = `riko`;
// const umur = `20`;

// function coba(s, ...values) {
//     let result = '';
//     s.forEach((str, i) => {
//         result += `${str}${values[i] || ''}`;

//     });
//     return result;
// }




// const str = coba `halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// highlight
const nama = `maiing`;
const umur = `20`;
const dream = `i can do whatever i can`;

function coba(s, ...values) {
    return s.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}
const str = coba `halo, nama saya ${nama}, saya ${umur} tahun, mimpi saya "${dream}".`;

document.body.innerHTML = str;
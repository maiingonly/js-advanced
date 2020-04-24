/* Promise */
// {object} yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous dimasa yang akan datang

// contoh 1
// let ditepati = true;
// const janji = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji anda ditepati');
//     }else {
//         reject('janji anda tidak ditepati');
//     }
// });

// janji
//     .then(response => console.log('terimakasih' + response))
//     .catch(response => console.log('kecewa'+ response));

//contoh 2 

/* let ditepati = false;
const janji2 = new Promise((resolve, reject) => {
    if(ditepati){
        setTimeout(() => {
            resolve('ditepati stelah beberapa waktu');
        }, 2000);
    }else {
        setTimeout(() => {
            reject('tidak ditepati setelah beberapa waktu');
        }, 2000);
    }
});

console.log('mulai');
console.log(janji2.then(() => console.log(janji2)) .catch(() => console.log(janji2)));
// janji2
//     .then(response => console.log(janji2))
//     .catch(response => console.log(janji2));
console.log('selesai');

 */

//contoh 3 
const jaga = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
          senin: 'ucup',
          selasa: 'mario',
          rabu: 'otong' 
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() =>{
        resolve([{
            kota: 'indramayu',
            suhu: 26,
            kondisi: 'Berawan'
        }]);
    }, 500);
});

Promise.all([jaga,cuaca])
    .then(response => {
        const [jaga,cuaca] = response;
        console.log(jaga);
        console.log(cuaca);
    });
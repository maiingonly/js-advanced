

// fetch
// const searchBtn = document.querySelector('.searchBtn');
// searchBtn.addEventListener('click', function(){

//     const inputKey = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=c4b6762c&s=' + inputKey.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCard(m));
//             const mContainer = document.querySelector('.movie-container');
//             mContainer.innerHTML = cards;

//             // ketika tombol detail diklik
//             const modalDetailbtn = document.querySelectorAll('.modal-detail');
//             modalDetailbtn.forEach(btn => {
//               btn.addEventListener('click',function() {
//                   const imdbid = this.dataset.imdbid; 
//                   fetch('http://www.omdbapi.com/?apikey=c4b6762c&i=' + imdbid)
//                     .then(response => response.json())
//                     .then(m =>{
//                         const movieDetail = showmd(m);
//                         const modalBody = document.querySelector('.modal-body');
//                         modalBody.innerHTML = movieDetail;
//                     });
//               });  
//             });
//         });
// });

const searchBtn = document.querySelector('.searchBtn');
searchBtn.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

// event binding
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

// function langkah 1
function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=c4b6762c&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCard(m));
    const mContainer = document.querySelector('.movie-container');
    mContainer.innerHTML = cards;
}

// funtion langkah 2 
function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=c4b6762c&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m) {
    const movieDetail = showmd(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}




function showCard(m){
    return `<div class="col-md-4 my-3">
    <div class="card">
    <img src="${m.Poster}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${m.Title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
    <a href="#" class="btn btn-info modal-detail" data-toggle="modal" data-target="#modalDetail" data-imdbid="${m.imdbID}">Show Details</a>
    </div>
    </div>
    </div>`;
}

function showmd(m) {
    return `<div class="container-fluid">
    <div class="row">
    <div class="col-md-3">
    <img src="${m.Poster}" class="img-fluid">
    </div>
    <div class="col-md">
    <ul class="list-group">
    <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
    <li class="list-group-item"><strong>Genre :</strong> ${m.Genre}</li>
    <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
    <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
    <li class="list-group-item"><strong>Language : </strong>${m.Language}</li>
    <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
    </ul>
    </div>
    </div>
    </div>`;
}

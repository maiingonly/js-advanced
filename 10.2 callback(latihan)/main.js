
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=c4b6762c&s=hack',
    success: results => {
        const movies = results.Search;
        let cards = '';
        movies.forEach(r => {
            cards += `<div class="col-md-4 my-3">
                        <div class="card">
                            <img src="${r.Poster}" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">${r.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${r.Year}</h6>
                            <a href="#" class="btn btn-primary">Show Details</a>
                            </div>
                        </div>
                      </div>`;
        });
        $('.movie-container').html(cards);
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
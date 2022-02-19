const form = document.querySelector('#searchForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.dir(this); //to search the dir
    const searchTerm = form.elements.query.value;
    axios.get(` https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    .then((res) => {
        console.log(res.data);
    })
}) 

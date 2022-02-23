const form = document.querySelector('#searchForm');
const container = document.querySelector('.container')

form.addEventListener('submit',async function (e){
    e.preventDefault();
    console.dir(this); //to search the dir
    const searchTerm = form.elements.query.value;
    
    const res = await axios.get(` https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    makeImg(res.data)

})

function makeImg(shows) {
    for(let result of shows){
        console.log(result.show.image.medium);
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        document.body.append(img)
    }
}

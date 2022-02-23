const form = document.querySelector('#searchForm');
const container = document.querySelector('.container')

form.addEventListener('submit',async function (e){
    e.preventDefault();
    console.dir(this); //to search the dir
    const searchTerm = form.elements.query.value;
    const config = {params:{q: searchTerm}} //we can do param as a separate object
    const res = await axios.get(` https://api.tvmaze.com/search/shows?q=${searchTerm}`, {params:{q:searchTerm}})
    makeImg(res.data)
    form.elements.query.value = '';
})

function makeImg(shows) {
    for(let result of shows){
        if(result.show.image){
            console.log(result.show.image.medium);
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}

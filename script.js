const form = document.querySelector('#searchForm');
const container = document.querySelector('.container')

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.dir(this); //to search the dir
    const searchTerm = form.elements.query.value;
    
    axios.get(` https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    .then((res) => {
        for(let i = 0; i< res.data.length;i++){
            console.log(res.data[i]);
            
            const headerForImg = document.createElement('h1');
            const commonDiv = document.createElement('span');
            const imgSection = document.createElement('img');
            headerForImg.innerText = res.data[i].show.name; 
            imgSection.src = res.data[i].show.image.medium; 
            commonDiv.append(headerForImg)
            commonDiv.append(imgSection)
            container.append(commonDiv);
            commonDiv.classList.add("mystyle")
        }

    })
    .catch((e) => {
        console.log(e);
    })
    

}) 

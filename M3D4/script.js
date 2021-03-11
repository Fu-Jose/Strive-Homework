window.onload = () => {
    fetchBooks ();
};

const fetchBooks = (query) => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => res.json())
    .then((data) =>{console.log(data)})
    .then(renderData)
    .catch((e) => console.log(e))
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
        .then(response => response.json())
        .then((data) => {console.log(data)})
        .then(renderData)
        .catch(console.log)
}

function renderData(data) {
    data.forEach(function(name){ 
        document.write(name + "<br/>"); 
    }); 
}
// const displayBooks = (data) => {
//     data.forEach
// }
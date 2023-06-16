const preencherTabela = () => {

fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())
.then(json => {
    //console.log(json);

    

    json.forEach(json => {
        console.log(json);
        
    });


})
}
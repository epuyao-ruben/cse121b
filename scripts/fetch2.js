//definir variable constante en funcion del link:
const url = "https://jsonplaceholder.org/users";

//crear variable resultads nula:
let results = null;

async function getUsers(URL) {              //puede correr en un hilo indeendiente
    const response = await fetch(URL);      //todo los datos
    if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    console.log(data);
    }
}

//creo una funcion para
function displayUsers(data) {
    const userlist = document.querySelector("ul");                                              //creo una variable que reescribirá los <ul> del html
    data.forEach(user => {                                                                   //para cada uno de los user de la data
        const listItem = document.querySelector("li");                                          //voy a crear unis <li> de lista en html y los llamaré listItem
        listItem.textContent = `${user.firstname} ${user.lastname} ${{user.birthDate}}`;        //el contenido de estos "listItem" será 

    });
}
getUsers(url);


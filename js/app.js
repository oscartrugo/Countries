const API_URL = 'https://restcountries.com/';

const HTMLResponse = document.querySelector("#app");
const ul = document.createDocumentFragment();


fetch(`${API_URL}/v3.1/all`)
.then((response) => response.json())
.then( (countries) => {
    countries.forEach(country => {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${country.name.common}</td>
        <td>${country.capital}</td>
        <td>${country.region}</td>
        <td>${country.languages}</td>
        <td>${country.population}</td>
        <td><img src="${country.flags.png}" width="50" alt="Flag"></td>

        `;
        row.appendChild(document.createTextNode(""));
        ul.appendChild(row);

    })

    HTMLResponse.appendChild(ul);

    // SEARCH INPUT
    const searchInput= document.getElementById("search");
    const rows = document.querySelectorAll("tbody tr");
    //console.log(rows);

    searchInput.addEventListener("keyup", function(event){
        // console.log(event)
        
        const q = event.target.value.toLowerCase();
        rows.forEach((row) => { //row es el elemento que esta coincidiendo
            row.querySelector("td").textContent.toLowerCase().startsWith(q) 
            ? row.style.display = "" 
            : (row.style.display = 'none');

        });

    });
    
});




// --------------------------------------------------------------------------------------------------------
// const HTMLResponse = document.querySelector("#app");
// const ul = document.createDocumentFragment();
// const arrayCountries = []; //Arreglo que guarda los paises
// let i = 0;

// fetch(`${API_URL}/v3.1/all`)
// .then((response) => response.json())
// .then( (users) => {
//     users.forEach(user => {
//         let elemento = document.createElement("li");
//         elemento.appendChild(document.createTextNode(`${user.name.common} `));
//         ul.appendChild(elemento);

//         arrayCountries[i] = user.name.common;
//         i = i + 1;

//     })

//     HTMLResponse.appendChild(ul);

//     console.log(arrayCountries.sort())
// });


// --------------------------------------------------------------------------------------------------
// const HTMLResponse = document.querySelector("#app");

// fetch(`${API_URL}/users`)
// .then((response) => response.json())
// .then( (users) => {
//     const template = users.map( (user) => `<li>${user.name} ${user.email}</li>`);
//     HTMLResponse.innerHTML = `<ul>${template}</ul>`;
// });

// ---------------------------------------------------------------------------------------------

// const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if(this.readyState === 4 && this.status === 200){
//         // 0 = UNSET, no se ha llamado al metodo open
//         //1 = OPENED, se ha llamado al metodo open.
//         //2 = HEADERS_RECEIVED, se esta llamando al metodo SEND()
//         //3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
//         //4 = DONE, se ha completado todo.

//         const data = JSON.parse(this.response)
//         console.log(data)

//         const HTMLResponse = document.querySelector("#app");

//         const template = data.map(user => `<li>${user.name} ${user.email}</li>`) 

//         HTMLResponse.innerHTML = `<ul>${template}</ul>`


//     }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET", `${API_URL}/users`);
// xhr.send();
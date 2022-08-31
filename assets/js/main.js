const txtPelicula = document.getElementById("txtPelicula");
const tblPelicula = document.getElementById("tblPelicula");

//let pelicula = [];aqui se almacenarian las peliculas. esto lo hacemos con el localstorage.
let peliculas = (localStorage.getItem("peliculas")) ? JSON.parse(localStorage.getItem("peliculas")) : [];
//esto se parece a lo de arriba, pero no igual. JSON.parce convierte la informacion del localstorage, a la estructura de JS, y si no hay dejalas vacias. 

mostrarPeliculas();// esto manda a llamar la funciont de abajo

function guardar(){
    console.log("entro a guardar");// esto se hace para saber si el boton de guardar funciona
    const pelicula = txtPelicula.value;
    peliculas.push(pelicula);
    // console.log(`escribio ${peliculas}`);
    // console.log(peliculas);
    actualizarStorage();
}

function actualizarStorage(){
// aqui iniciamos el localstorage, para que cuando refresquemos guarde la info que hemos ingresado. solo se guarda string.
    localStorage.setItem("peliculas", JSON.stringify(peliculas)); 
    mostrarPeliculas();    
}
function mostrarPeliculas(){
    if(peliculas.length === 0){
        tblPelicula.innerHTML =  `<tr><td colspan="2" class="text-center font-weight-bold">No hay registros</td></tr>`;
        //innes para crear algo en el html
    }else {
        tblPelicula.innerHTML = "";
        for (const pelicula of peliculas) {
        const tr = document.createElement("tr");
        const tdPelicula = document.createElement("td");
        tdPelicula.innerHTML = pelicula;
        tr.appendChild(tdPelicula);
        tblPelicula.appendChild(tr);

        const tdAcciones = document.createElement ("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        tdAcciones.appendChild(btnEliminar);
        tr.appendChild(tdAcciones);
        btnEliminar.classList.add("btn", "btn-danger");

        }
    }
}

function eliminar(pelicula){
    //buscar la funcion de indexof JS, eso hace en un arreglo buscar el indexoff, o sea el indice de la pelicula que esta llegando, que posicion en base 0 tiene un elemento
    const index = peliculas.indexOf(pelicula);
    // funcion splice, borra algo de un arreglo, hay que decirle donde esta posicionado, y cuantos elementos a partir de ahi quieres borrar. 
    peliculas.splice(index, 1);
}

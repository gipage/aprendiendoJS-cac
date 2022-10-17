const anioactual = 2022;
function procesar(e) {
    e.preventDefault();
    let nombre;
    let fecha;
    let edad;
    nombre = document.getElementById("inputNombre").value
    fecha = new Date(document.getElementById("inputFechaNac").value).getFullYear()
    edad = anioactual - fecha
    console.log("Hola " + nombre);
    console.log("Usted tiene " + edad + " Años");
}
document.getElementById("form").onsubmit = procesar;
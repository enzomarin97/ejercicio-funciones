/* Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos */

/////// 1)
function sinPar(){
    console.log(true)
}
sinPar();

//////// 2)
const miProm = new Promise((res, rej) =>{
    setTimeout(() => {
        res("hola soy una promesa")
    }, 5000);
})
miProm
    .then((mensaje) => console.log(mensaje))
    .catch(() => console.log("error"))


//////// 3) 
function* generaIndices(){
    let indices = 0;
    while (true) {
        yield indices
        indices += 2;
    }
}
const genIndices = generaIndices();
console.log(genIndices.next());
console.log(genIndices.next());
console.log(genIndices.next());
console.log(genIndices.next());

// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    constructor (codigo, nombre, precio){
        this.codigoProducto = codigo;
        this.nombreProducto = nombre;
        this.precioProducto = precio;
    }
    ImprimirDatos(){
        document.write(`
        <ul>
            <li>Nombre: ${this.codigoProducto}</li>
            <li>Apellido: ${this.nombreProducto}</li>
            <li>Email: ${this.precioProducto}</li>   
        </ul>`)
    }
} 

let celular = new Producto("1002","LG","$80000");
let tv = new Producto("8566","Samsung","$150000");
let computadora = new Producto("3553","Toshiba","$200000");

let productos = [celular, tv, computadora];
console.log(celular)
console.log(tv)
console.log(computadora)
celular.ImprimirDatos();
tv.ImprimirDatos();
computadora.ImprimirDatos();
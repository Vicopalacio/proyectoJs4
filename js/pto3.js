// Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor (altoR, anchoR){
        this.alto = altoR;
        this.ancho = anchoR;
    }
    CalcularArea (){
        return this.ancho * this.alto;
    }
    CalcularPerimetro(){
        return 2* (this.alto + this.ancho);
    }
}

let rectangulo = new Rectangulo(10,50);
console.log(rectangulo.CalcularArea());
console.log(rectangulo.CalcularPerimetro());
document.write(rectangulo.CalcularArea());
document.write("<br>"+rectangulo.CalcularPerimetro());



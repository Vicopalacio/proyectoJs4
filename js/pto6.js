// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    constructor(isbn, titulo, autor, numeroPaginas){
        this._codigo = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
    }
    
    set modificarIsbn (nuevoCodigo){
        this._codigo = nuevoCodigo;
    }
    get mostrarIsbn (){
        return this._codigo;
    }

    set modificarTitulo (nuevoTitulo){
        this._titulo = nuevoTitulo;
    }
    get mostrarTitulo (){
        return this._titulo;
    }

    set modificarAutor (nuevoAutor){
        this._autor = nuevoAutor;
    }
    get mostrarAutor (){
        return this._autor;
    }

    set numeroPaginas (nuevoNum){
        this._numeroPaginas = nuevoNum;
    }
    get mostrarNumPaginas (){
        return this._numeroPaginas;
    }
    
    mostrarLibro(){
    document.write(`<br> El libro ${this._titulo} con USBN ${this._codigo} creado por el autor ${this._autor} tiene el numero de paginas ${this._numeroPaginas}.<br>`)
    }  
}

let libro1 = new Libro(9743662501456, "El psicoanalista", "John Katzenbach",500);

let libro2 = new Libro (5976822541036, "La tregua", "Mario Benedetti", 300)


libro1.mostrarLibro();
libro2.mostrarLibro();


if(libro1._numeroPaginas < libro2._numeroPaginas){
    document.write(`El libro ${libro2._titulo} es el que tiene mas paginas`)
}else if (libro1._numeroPaginas > libro2._numeroPaginas){
    document.write(`El libro ${libro1._titulo} es el que tiene mas paginas`)
}else{document.write(`El libro ${libro1._titulo} tiene las mismas paginas que el libro ${libro2._titulo}`)}

// libro1.modificarIsbn = 5976822541036;
// libro1.modificarTitulo = "La tregua";
// libro1.modificarAutor = "Mario Benedetti";
// libro1.numeroPaginas = 300;

// libro1.mostrarLibro();












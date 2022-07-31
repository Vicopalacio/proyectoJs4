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

    get isbn (){
        return this._codigo;
    }
    get titulo (){
        return this._titulo;
    }
    get autor (){
        return this._autor;
    }
    get numeroPaginas (){
        return this._numeroPaginas;
    }

    set isbn (cod){
        this._codigo = cod;
    }
    set titulo (tit){
        this._titulo = tit;
    }
    set autor (au){
        this._autor = au;
    }
    set numeroPaginas (num){
        this._numeroPaginas = num;
    }

    mostrarLibro(){
    document.write(`<br> El libro ${this.titulo} con USBN ${this.codigo} creado por el autor ${this.autor} tiene el numero de paginas ${this.numeroPaginas}<br>`)
    }

    // paginas(){
    //     if (pagina1 > pagina2){
    //         document.write ("El psicoanalista tiene más páginas")
    //     }else{document.write ("La tregua tiene más paginas")}
    // }
}

let libro1 = new Libro (9743662501456, "El psicoanalista", "John Katzenbach",500)
libro1.codigo = 9743662501456;
libro1.titulo = "El psicoanalista";
libro1.autor = "John Katzenbach";
libro1.numeroPaginas = 522;

libro1.mostrarLibro();

let libro2 = new Libro (5976822541036, "La tregua", "Mario Benedetti", 300)
libro2.codigo = 5976822541036;
libro2.titulo = "La tregua";
libro2.autor = "Mario Benedetti";
libro2.numeroPaginas = 300;

libro2.mostrarLibro();








// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
    constructor (nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    mostrarGeneracion(){
        if (this.anioNacimiento >= 1938 && this.anioNacimiento <= 1948){
            document.write ("<br>Silent Generation, rasgo caracteristico AUSTERIDAD")
        }
        else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
            document.write ("<br>Boby Boom, rasgo caracteristico AMBICIÓN")
        }
        else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
            document.write ("<br>Generation X, rasgo caracteristico OBSESIÓN POR EL ÉXITO")
        }
        else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
            document.write ("<br>Generation Y, rasgo caracteristico FRUSTRACIÓN")
        }
        else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
            document.write ("<br>Generation Z, rasgo caracteristico IRREVERENCIA")
        }else {alert("El numero ingresado no pertenece a ninguna generación")
                document.write ("El numero ingresado no pertenece a ninguna generación")};
    }

    mostrarDatos (){
        document.write(`
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Apellido: ${this.edad}</li>
            <li>Email: ${this.dni}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso}</li> 
            <li>Altura: ${this.altura}</li> 
            <li>Fecha de nacimiento: ${this.anioNacimiento}</li>      
        </ul>`)
    }

    mayorEdad (){
        if (this.edad >= 18){
            document.write ("Usted es mayor de edad")
        }else(document.write("<br>Usted es menor de edad<br>"))
    }

    generarDni (){
            let dni = Math.floor(Math.random()*(50000000 - 8000000 + 1)+8000000);
            document.write("<br> DNI es: " + dni + "<br>");
    }
}

let juan = new Persona ("Juan", "30", "37568963","Masculino", "60kg", "1,70mt","1992");
let cielo = new Persona ("Cielo", "27","35698565","Femenino", "55kg", "1,63mt","1995");
let gabriela = new Persona ("Gabriela", "61", "14401820","Femenino", "58kg", "1,62mt","1961");
let maria = new Persona ("Maria", "9", "48569584","Femenino", "50kg", "1,62mt","2013");

juan.mostrarGeneracion();
juan.mostrarDatos();
juan.mayorEdad();
juan.generarDni();
cielo.mostrarGeneracion();
cielo.mostrarDatos();
cielo.mayorEdad();
cielo.generarDni();
gabriela.mostrarGeneracion();
gabriela.mostrarDatos();
gabriela.mayorEdad();
gabriela.generarDni();
maria.mostrarGeneracion();
maria.mostrarDatos();
maria.mayorEdad();






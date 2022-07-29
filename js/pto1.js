const auto = {
    color: "azul",
    marca: "ford",
    modelo: "ecosport",
    estado: true,
    encender (encendido){
        this.estado === encendido;
        if (encendido === true){
            alert("Esta encendido")
        }else {
            alert("El auto esta apagado")
        }
    },
    apagar(){
    }
};

let encendido = confirm ("El auto esta apagado, quiere encenderlo?");
auto.encender (encendido);
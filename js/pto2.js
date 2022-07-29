const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(montoIngresar){
        //toda la logica para agregar dinero a la cuenta
        this.saldo += montoIngresar; //this.saldo = this.saldo + montoIngresar;
    },
    extraer(montoExtraer){
        //toda la logica para extraer dinero de la cuenta
        if(this.saldo >= montoExtraer){
            this.saldo -= montoExtraer;
        }else{
            alert("Saldo insuficiente");
        }
    },
    informar(){
        console.log(this)
        document.write(`<p>Cuenta del titular: ${this.titular}, tiene un saldo de $ ${this.saldo} </p>`)
    }
};

cuenta.informar();

let montoIngresar = parseFloat(prompt("Ingrese un monto"));
cuenta.ingresar(montoIngresar);
cuenta.informar();

let montoExtraer = parseFloat(prompt("Ingrese un monto a extraer"));
cuenta.extraer(montoExtraer);
cuenta.informar();
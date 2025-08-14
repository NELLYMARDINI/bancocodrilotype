export default class Cl_Cliente {
    constructor(nombre, credito, cuenta, tipoCliente, plazo, aprobados) {
        this._nombre = "";
        this._credito = 0;
        this._cuenta = "";
        this._tipoCliente = "";
        this._plazo = 0;
        this._aprobados = "";
        this.nombre = nombre;
        this.credito = credito;
        this.cuenta = cuenta;
        this.tipoCliente = tipoCliente;
        this.plazo = plazo;
        this.aprobados = aprobados;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set credito(credito) {
        this._credito = +credito;
    }
    get credito() {
        return this._credito;
    }
    set cuenta(cuenta) {
        this._cuenta = cuenta;
    }
    set tipoCliente(tipoCliente) {
        this._tipoCliente = tipoCliente;
    }
    set plazo(plazo) {
        this._plazo = plazo;
    }
    set aprobados(aprobados) {
        this._aprobados = aprobados;
    }
    //Faltaba el GET aprobados
    get aprobados() {
        return this._aprobados;
    }
}

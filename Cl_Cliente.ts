export default class Cl_Cliente {
    private _nombre: string = "";
    private _credito : number = 0;
    private _cuenta : string = "";
    private _tipoCliente: string = "";
    private _plazo :number = 0;
    private _aprobados : string = "";
    constructor (nombre: string, credito: number, cuenta: string, tipoCliente: string, plazo: number, aprobados: string) {
        this.nombre = nombre;
        this.credito = credito;
        this.cuenta = cuenta;
        this.tipoCliente = tipoCliente;
        this.plazo = plazo;
        this.aprobados = aprobados; 
    }
    set nombre (nombre: string) {
        this._nombre = nombre;
    }
    get nombre () : string {
        return this._nombre;
    }
    set credito (credito: number) {
        this._credito = +credito;
    }
    get credito() : number {
        return this._credito;
    }
    set cuenta (cuenta: string) {
        this._cuenta = cuenta;
    }
    set tipoCliente (tipoCliente: string) {
        this._tipoCliente = tipoCliente;
    }
    set plazo (plazo: number) {
        this._plazo = plazo;
    }
    set aprobados (aprobados: string) {
        this._aprobados = aprobados;
    }
    //Faltaba el GET aprobados
    get aprobados ():string    {
        return this._aprobados;
    }
}   
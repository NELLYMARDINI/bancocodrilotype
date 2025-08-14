import Cl_Cliente from "./Cl_Cliente.js";
export default class Cl_Banco {
    constructor() {
        this._contCreditoAprobados = 0;
        this._acumMontoCreditoAprobados = 0;
    }
    constuctor() { }
    procesarCliente(cliente) {
        if (cliente.aprobados == "SI") {
            this._contCreditoAprobados++;
            this._acumMontoCreditoAprobados += cliente.credito;
        }
    }
    totalCreditoAprobados() {
        return this._contCreditoAprobados;
    }
    montoTotalCreditoAprobados() {
        return this._acumMontoCreditoAprobados;
    }
}

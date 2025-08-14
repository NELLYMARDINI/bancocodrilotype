import Cl_Cliente from "./Cl_Cliente.js"

export default class Cl_Banco {
    private _contCreditoAprobados : number = 0
    private _acumMontoCreditoAprobados : number = 0
    constuctor(){}
    procesarCliente(cliente:Cl_Cliente){
        
        if (cliente.aprobados == "SI") {
            this._contCreditoAprobados  ++;
            this._acumMontoCreditoAprobados += cliente.credito  ;   
            }
        }
        totalCreditoAprobados(){ 
            return this._contCreditoAprobados
        }    
        montoTotalCreditoAprobados(){
            return this._acumMontoCreditoAprobados      
    }   
}
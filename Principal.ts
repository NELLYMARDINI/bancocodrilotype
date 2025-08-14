
//Faltaban los .js de cada clase
import Cl_Banco from "./Cl_Banco.js";
import Cl_Cliente from "./Cl_Cliente.js";

const cliente1 : Cl_Cliente = new Cl_Cliente("Tony Melate", 15000, "Corriente", "AA", 90, "SI");
const cliente2 : Cl_Cliente = new Cl_Cliente("Susana Perez", 8500, "Ahorro", "A", 60, "NO");
const cliente3 : Cl_Cliente = new Cl_Cliente("Elmo Dinero", 25000, "Corriente", "AA", 120, "SI");
const cliente4 : Cl_Cliente = new Cl_Cliente("Paco el Deudor", 500, "Ahorro", "A", 30, "NO");
const cliente5 : Cl_Cliente = new Cl_Cliente("Lola Mento", 12300, "Corriente", "AA", 180, "SI");
const cliente6 : Cl_Cliente = new Cl_Cliente("Cheque Pérez", 45000, "Corriente", "AA", 360, "SI");
const cliente7 : Cl_Cliente = new Cl_Cliente("Dolores Fuertes", 1200, "Ahorro", "A", 15, "NO");
const cliente8 : Cl_Cliente = new Cl_Cliente("Juan Pagatodo", 32000, "Corriente", "AA", 240, "SI     ");
const cliente9 : Cl_Cliente = new Cl_Cliente("Lavud Villalobos", 19500, "Corriente", "AA", 150, "SI");

const Banco : Cl_Banco = new Cl_Banco();

Banco.procesarCliente(cliente1);
Banco.procesarCliente(cliente2);
Banco.procesarCliente(cliente3);
Banco.procesarCliente(cliente4);
Banco.procesarCliente(cliente5);
Banco.procesarCliente(cliente6);
Banco.procesarCliente(cliente7);
Banco.procesarCliente(cliente8);
Banco.procesarCliente(cliente9);

let salida: HTMLElement |null = document.getElementById("salida");
if(salida !==null){
    salida.innerHTML = `Datos de cliente
    <br> Numero de Creditos aprobados ${Banco.totalCreditoAprobados()} 
    <br> Monto total de creditos aprobados ${Banco.montoTotalCreditoAprobados()}`  
}
else{
    console.error("error")
    }
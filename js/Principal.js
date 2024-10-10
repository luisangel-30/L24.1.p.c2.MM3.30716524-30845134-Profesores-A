import Cl_profesor from "./Cl_profesor.js";
import Cl_fijo from "./Cl_fijo.js";
import Cl_contratado from "./Cl_contratado.js";

let profesor=new Cl_profesor();
let fijo1=new Cl_fijo("Carlos",25,100);
let fijo2=new Cl_fijo("Carolina",40,90);

let salida = document.getElementById("salida");

salida.innerHTML=`
Nombre del profesor fijo: ${fijo1.nombre}
<br> Monto del bono: $${fijo1.bono}
<br> Monto del sueldo: $${fijo1.sueldo}
<br>Ingreso total del profesor ${fijo1.nombre}: $${fijo1.ingresoFijo()}
<br> <br>
<br>Nombre del profesor fijo: ${fijo2.nombre}
<br>Monto del bono: $${fijo2.bono}
<br>Monto del sueldo: $${fijo2.sueldo}
<br>Ingreso total del profesor ${fijo2.nombre}: $${fijo2.ingresoFijo()}
`



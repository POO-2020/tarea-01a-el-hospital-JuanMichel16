import tiempo from "./tiempo.js"
import nombre from "./nombre.js"
import doctor from "./doctor.js"

class Main {
constructor(){
    this.tiempoNuevo = new tiempo(2,30,"pm")
    this.nuevoNombre = new nombre("Juan Manuel", "Michel", "Vargas")
    this.doctorNuevo = new doctor( "cirujano", 3122730867, 1233456 )
}
probarTiempo(){
    console.log(`${this.tiempoNuevo.getFormato12()}`)
    console.log(`${this.tiempoNuevo.getFormato24()}`)
}

probarNombre(){
    console.log(`${this.nuevoNombre.getNombreCompleto()}`)
    console.log(`${this.nuevoNombre.getApellidoNombre()}`)
    console.log(`${this.nuevoNombre.getIniciales()}`)
}

probarDoctor(){
    console.log(`${this.doctorNuevo.getPerfil()}`)
}
}
let app = new Main()
app.probarNombre()
app.probarTiempo()
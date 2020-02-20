import tiempo from "./tiempo.js"
import nombre from "./nombre.js"
class Main {
constructor(){
    this.tiempoNuevo = new tiempo(2,30,"pm")
    this.nuevoNombre = new nombre("Juan Manuel", "Michel", "Vargas")

}
probarTiempo(){
    console.log(`${this.tiempoNuevo.getFormato12()}`)
    console.log(`${this.tiempoNuevo.getFormato24()}`)
}

probarNombre(){
    console.log(`${this.nuevoNombre.getNombreCompleto()}`)
    console.log(` ${this.nuevoNombre.getApellidoNombre()}`)
}

}
let app = new Main()
app.probarNombre()
app.probarTiempo()
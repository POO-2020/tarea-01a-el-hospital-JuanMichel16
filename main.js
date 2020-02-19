import tiempo from "./tiempo.js"
import nombre from "./nombre.js"
class Main {
constructor(){
    this.tiempoNuevo = new tiempo(2,30,"pm")
    this.nuevoPaciente = new nombre("Juan Manuel", "Michel", "Vargas")

}
probarTiempo(){
    console.log(`${this.tiempoNuevo.getFormato12()}`)
    console.log(`${this.tiempoNuevo.getFormato24()}`)
}

}
let app = new Main()
app.probarTiempo()
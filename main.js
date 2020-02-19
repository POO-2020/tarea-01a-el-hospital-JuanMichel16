import tiempo from "./tiempo.js"
class Main {
constructor(){
    this.tiempoNuevo = new tiempo(2,30,"pm")

}
probarTiempo(){
    console.log(`${this.tiempoNuevo.getFormato12()}`)
    console.log(`${this.tiempoNuevo.getFormato24()}`)
}

}
let app = new Main()
app.probarTiempo()
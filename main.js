import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Doctor from "./doctor.js"
import Fecha from "./fecha.js"
import Paciente from "./paciente.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main {
    constructor() {
    this.tiempoNuevo = new Tiempo (2,30,"pm")
    this.nuevoNombre = new Nombre("Juan Manuel", "Michel", "Vargas")
    this.doctorNuevo = new Doctor(this.nuevoNombre,"cirujano", 3122730867, 1233456 )
    this.fechaNueva = new Fecha(8, 10, 2019)
    this.nuevoPaciente = new Paciente(this.nuevoNombre, this.fechaNueva, 31212313123)
    this.nuevaCita = new Cita(this.fechaNueva, this.tiempoNuevo, this.nuevoNombre, this.nuevoNombre)
    this.hospitales = new Hospital("Hospital Manuel", "Av. San Fernando #312")
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

probarFecha() {
    console.log(`${this.fechaNueva.getAños()}`)
    console.log(`${this.fechaNueva.getMeses()}`)
    console.log(`${this.fechaNueva.getSemanas()}`)
    console.log(`${this.fechaNueva.getFecha()}`)
    console.log(`${this.fechaNueva.getDiaFecha()}`)
}

ProbarPaciente() {
    console.log(`${this.nuevoPaciente.getPerfil()}`)
}

ProbarCita() {
    console.log(`${this.nuevaCita.getPerfil()}`)
}

probarHospital(){
    this.hospitales.getRegistrarDoctor(this.doctorNuevo )
    this.hospitales.getRegistrarCitas(this.nuevaCita)

    this.hospitales.getListarDoctores()
    this.hospitales.getListarCitas()
}
}
let app = new Main()
app.probarNombre()
app.probarTiempo()
app.probarDoctor()
app.probarFecha()
app.ProbarPaciente()
app.ProbarCita()
app.probarHospital()
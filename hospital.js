import Cita from "./cita.js"
import Doctor from "./doctor.js"
export default class Hospital {

    /**
     * 
     * @param {String} nombre 
     * @param {String} direccion 
     * @param {string} doctores 
     * @param {String} citas 
     */

    constructor(nombre, direccion, doctores, citas) {
        this.nombres = nombre
        this.direcciones = direccion
        this.doctores = doctores
        this.citas = citas

}
    
registrarDoctor() {
    let nuevo = new Doctor("Juan Michel Vargas", "Odolotologo", 1312334543, 63624554)
    return ` ${nuevo}`

}

listarDoctores() {

}

registrarCita() {

}

listarCitas() {

}
}
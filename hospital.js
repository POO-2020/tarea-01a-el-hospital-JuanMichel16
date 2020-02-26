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

    constructor(nombre, direccion) {
        this.nombres = nombre
        this.direcciones = direccion
        this.listarDoctores = []
        this.listarCitas = []

}
    
getRegistrarDoctor(doctor){
    this.doctores.push(doctor)
}
getListarDoctores(){
    this.doctores.forEach((doctor,i) => {
        console.log(`${doctor.getPerfil()}, ${i}`)
    })
}
getRegistrarCitas(cita){
    this.citas.push(cita)
}
getListarCitas(){
    this.citas.forEach((cita,i) => {
        console.log(`${cita.getCita()}, ${i}`)
    })
}
}

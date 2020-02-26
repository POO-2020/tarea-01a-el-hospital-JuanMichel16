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
    this.listarDoctores.push(doctor)
}
getListarDoctores(){
    this.listarDoctores.forEach((doctor,i) => {
        console.log(`${doctor.getPerfil()}, ${i}`)
    })
}
getRegistrarCitas(cita){
    this.listarCitas.push(cita)
}
getListarCitas(){
    this.listarCitas.forEach((cita,i) => {
        console.log(`${cita.getPerfil()}, ${i}`)
    })
}
}

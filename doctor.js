export default class Doctor {

/**
 * 
 * @param {string} especialidad 
 * @param {number} telefono 
 * @param {number} cedula 
 */    
constructor(nombre, especialidad, telefono, cedula) {
    this.nombre = nombre
    this.especialidades = especialidad
    this.telefonos = telefono
    this.cedulas = cedula
}

getPerfil() {
    return ` ${this.cedulas}, ${this.especialidades}, ${this.nombre}, ${this.telefonos} `
}
}
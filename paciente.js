import nombre from "./nombre.js" 
import fecha from "./fecha.js"
export default class Paciente {

    /**
     * 
     * @param {string} nombre 
     * @param {date} fechaNacimiento 
     * @param {number} telefono 
     */

    constructor(nombre, fechaNacimiento, telefono) {
        this.nombres = nombre
        this.fechasNacimiento = fechaNacimiento 
        this.telefonos = telefono
    }

getPerfil() {
    return `${this.nombres.getNombreCompleto()}, ${this.fechasNacimiento.getFecha()}, ${this.telefonos} `
}
}
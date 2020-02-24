import fecha from "./fecha.js"
import nombre from "./nombre.js"
import paciente from "./paciente.js"
export default class Cita {

    /**
     * 
     * @param {Date} fechaCita 
     * @param {Number} horaCita 
     * @param {String} NombreDoctor 
     * @param {String} pacienteCita 
     */

    constructor(fechaCita, horaCita, NombreDoctor, pacienteCita) {
        this.fechasCitas = fechaCita
        this.horaCitas = horaCita
        this.NombreDoctores = NombreDoctor
        this.pacientesCitas = pacienteCita
    }

getPerfil() {
   return ` ${this.fechasCitas.getFecha()}, ${this.horaCitas}, DR. ${this.NombreDoctores.getNombrecompleto()}, Paciente: ${this.pacientesCitas.getNombrecompleto()}` 
    }
    
}



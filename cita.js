import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Tiempo from "./tiempo.js"
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
        this.nombreDoctores = NombreDoctor
        this.pacientesCitas = pacienteCita
    }

getPerfil() {
   return ` ${this.fechasCitas.getFecha()}, ${this.horaCitas.getFormato12()}, DR. ${this.nombreDoctores.getNombreCompleto()}, Paciente: ${this.pacientesCitas.getPerfil()}` 
    }
    
}



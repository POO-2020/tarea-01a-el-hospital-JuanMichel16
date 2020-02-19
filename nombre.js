export default class nombre {

    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */

    constructor(nombre, apellidoPaterno, apellidoMaterno) {
        this.nombrePaciente = nombre
        this.apellidoPaternoPaciente = apellidoPaterno
        this.apellidoMaternoPaciente = apellidoMaterno
    }

    getNombreCompleto() {
        return ` ${this.nombrePaciente} ${this.apellidoPaternoPaciente} ${this.apellidoMaternoPaciente}`
    }


}
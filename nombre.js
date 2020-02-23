export default class nombre {

    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */

    constructor(nombre, apellidoPaterno, apellidoMaterno) {
        this.nombre = nombre
        this.apellidoP = apellidoPaterno
        this.apellidoM = apellidoMaterno
    }

    getNombreCompleto() {
        return ` ${this.nombre} ${this.apellidoP} ${this.apellidoM}`
    }

    getApellidoNombre() {
        return ` ${this.apellidoP} ${this.apellidoM} ${this.nombre}`
    }

    getIniciales() {

        var cadena = `${this.nombre} ${this.apellidoP} ${this.apellidoM}`,
        separador = " ",
        separar=[],
        arregloDeSubCadenas = cadena.split(separador);

        for (let x=0;x<arregloDeSubCadenas.length;x++){
            separar[x] = arregloDeSubCadenas[x].substring(0, 1);

    }

    return `${separar}`

    }
}

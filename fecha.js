var conteo
export default class Fecha {

    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año) {
        this.fechas = new date(dia, mes, año)
        this.dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    }

getAños() {
    let anosCumplidos
    anosCumplidos = 2020 - this.fechas.getFullYear()
    let conteo=anosCumplidos
    return `${anosCumnplidos}`
}

getMeses() {
    let mesesCumplidos
    mesesCumplidos = conteo * 12
    conteo = mesesCumplidos
    return `${mesesCumplidos}`
}

getSemanas() {
    let semanasCumplidas
    semanasCumplidas = conteo * 4
    conteo = semanasCumplidas
    return `${semanasCumplidas}`
}

getDias() {
    let diasCumplidos
    diasCumplidos = conteo * 30
    return `${diasCumplidos}`
}

getFecha() {
    let mesDelAno = this.meses[this.fechas.getMonth()]
    return `${this.fechas.getdate()} / ${mesDelAno} / ${this.fechas.getFullYear()}`
}

getDiaFecha() {
    let diaAno = this.dias[this.fechas.getDay()]
    return ` ${diaAno}`
}
}
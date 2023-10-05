

class Planta {
    #nombre = "def nombre";
    #puntosDeCrecimiento = 0;

    constructor(nombre){
        this.#nombre= nombre;

    }

    getNombre() {
        return this.#nombre;
    }
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setPuntosDeCrecimiento() {
        this.#puntosDeCrecimiento = puntosDeCrecimiento;
    }
    getPuntosDeCrecimiento() {
        return this.#puntosDeCrecimiento;

    }
    crecen(persona) {
        this.#puntosDeCrecimiento++;
        if (this.#puntosDeCrecimiento) {
            console.log(this.getNombre() + " creciendo " + this.getPuntosDeCrecimiento());
            persona.seEmociona();
        }


    }

}
export {Planta};
/* module.exports = planta; */
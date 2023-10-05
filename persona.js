

class Persona {
    #nombre = "def nombre";
    #estado = 0;

    constructor(nombre) {
        this.#nombre = nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setEstado() {
        this.#estado = estado;
    }
    getEstado() {
        return this.#estado;

    }

    riegaLas(plantas) {
        console.log(this.getNombre() + " riega las " + plantas.getNombre());
        plantas.crecen(this);
    }

    seEmociona() {
        this.#estado++;
        if (this.#estado) {
            console.log(this.getNombre() + " se Alegraaaa!! ");
        }
    }

    //agregar vector
    /* sigueRegando() {

    console.log("ahora " + this.getNombre() + "riega las " + plantas.getNombre()); 

    } */

}
    


export { Persona };
/* module.exports = persona; */
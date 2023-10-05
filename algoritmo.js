
/* const Persona = require("./Persona.js");
const planta = require("./Planta.js"); */

import { Persona } from "./persona.js";
import { Planta } from "./planta.js";

 
const maria = new Persona("Maria");
const plantas = new Planta("Margaritas");
const plantas1 = new Planta("Orguideas");

/* plantas.setNombre("Margaritas"); */
/* maria.setNombre("maria"); */
maria.sigueRegando(plantas);
maria.riegaLas(plantas);



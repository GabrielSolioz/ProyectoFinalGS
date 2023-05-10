export class Educacion {
    id?:number;
    nombreE:string;
    descripcionE:string;
    periodoE:string;

    constructor(nombreE:string,descripcionE:string,periodoE:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.periodoE = periodoE;
    }

}

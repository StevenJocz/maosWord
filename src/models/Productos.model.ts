import { StaticImageData } from "next/image";


export interface NivelIngles {
    niveles: string; 
    descripcion: string; 
    habilidades: string[]; 
    imagen: StaticImageData;
  }
  
  export interface ProgramaIngles {
    A1: NivelIngles;
    A2: NivelIngles;
    B1: NivelIngles;
  }
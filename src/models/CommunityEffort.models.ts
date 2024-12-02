import personaUno from '../../public/img/personaUno.jpg';
import personaDos from '../../public/img/personaDos.jpg';
import personaTres from '../../public/img/personaTres.jpg';
import personaCuatro from '../../public/img/personaCuatro.jpg';
import { StaticImageData } from 'next/image';

export interface Comment {
    name: string;
    role: string;
    message: string;
    image: StaticImageData;
}

export const comments: Comment[] = [
    {
        name: "Nancy Esther Ruiz",
        role: "Fundadora y Visionaria",
        message: "El aprendizaje es una semilla que florece con dedicación y propósito. MAO Word es nuestro testimonio de ello.",
        image: personaUno,
    },
    {
        name: "Laura Gómez",
        role: "Diseñadora Pedagógica",
        message: "Mi misión es transformar el aprendizaje en una experiencia significativa y enriquecedora.",
        image: personaDos,
    },
    {
        name: "Carlos Méndez",
        role: "Coordinador de Contenido",
        message: "Cada palabra cuenta cuando se trata de construir un puente hacia nuevas oportunidades.",
        image: personaCuatro,
    },
    {
        name: "Diego Torres",
        role: "Embajador Estudiantil",
        message: "Como estudiante, MAO Word me inspiró a creer en mi potencial, y ahora inspiro a otros a hacer lo mismo.",
        image: personaTres,
    },
];

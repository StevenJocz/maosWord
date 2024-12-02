import { StaticImageData } from "next/image";
import mao1 from "../../public/maos/1.jpg";
import mao2 from "../../public/maos/2.jpg";
import mao3 from "../../public/maos/3.jpg";
import mao4 from "../../public/maos/4.jpg";
import mao5 from "../../public/maos/5.jpg";
import mao6 from "../../public/maos/6.jpg";
import mao7 from "../../public/maos/7.jpg";
import mao8 from "../../public/maos/8.jpg";

export interface ImageData {
    src: StaticImageData;
    alt: string;
}

export interface ImageDataDos {
    src: string;
    alt: string;
}

export const MaosImagenes: ImageData[] = [
    {
        src: mao1,
        alt: "Maos 1",
    },
    {
        src: mao2,
        alt: "Maos 2",
    },
    {
        src: mao3,
        alt: "Maos 3",
    },
    {
        src: mao4,
        alt: "Maos 4",
    },
    {
        src: mao5,
        alt: "Maos 5",
    },
    {
        src: mao6,
        alt: "Maos 6",
    },
    {
        src: mao7,
        alt: "Maos 7",
    },
    {
        src: mao8,
        alt: "Maos 8",
    },
];


export const MaosContent: { imagen: ImageData; textos: string[] }[] = [
    {
        imagen: { src: mao1, alt: "Maos 1" },
        textos: [
            "Tan pequeño y tan revelador, comenzó su historia como una mascota que requería cuidados en el despacho de los profesores de la Facultad de Educación y del Centro de Idiomas, fue recibido con bombos y platillos, y todo iba muy bien hasta que llegaron las vacaciones y Mao se quedó sin su amado compañero de viaje por la vida. Sí, el maestro se fue de vacaciones y se quedó con un cuidador que pronto comenzó a notar que sus bracitos estaban tristes y amarillos, su compañero de viaje lo había dejado. Tan pronto como el maestro regresó, se dio cuenta de que necesitaba ayuda y lo llevó a dar esperanza a un grupo de señoras con características similares.",
            "Ellos, como la mujer que le dio solo dos monedas citadas en la Biblia, le contaron las cosas más hermosas y esperanzadoras que jamás había escuchado antes.",
        ],
    },
    {
        imagen: { src: mao2, alt: "Maos 2" },
        textos: [
            "Al hacer la evidencia para recordar ese escenario, la maestra Nancy Esther Ruiz prestó atención a una sugerencia en particular, un recipiente más grande y cómodo. Hoy MAO es un hilo conductor, resiliente, inspirador, transversal, héroe, maestro, emprendedor, estrategia pedagógica y una marca para LICEI y ULC. Los estudiantes de primera admisión reciben MAO como marca de ambos programas desde el aula virtual o presencial del profesor, explicándoles que ellos son la buena tierra y MAO es el idioma inglés que se planta por decisiones personales en sus proyectos de vida y que requiere dos horas al día de su valioso tiempo para que dominen el idioma extranjero.",
            "Ellos, así como la mujer que le dio sus dos únicas monedas citadas en la Biblia, le contaron las cosas más hermosas y esperanzadoras que jamás había escuchado antes.",
        ],
    },
    {
        imagen: { src: mao3, alt: "Maos 3" },
        textos: [
            "La transversalidad ha sido una estrategia utilizada para la enseñanza-aprendizaje en las diferentes disciplinas del conocimiento. Las lenguas extranjeras son de gran importancia para el desarrollo integral del individuo, no solo como complemento a sus estudios primarios y secundarios, sino también como apoyo para su desarrollo profesional.",
            "Las habilidades desarrolladas en este proceso de enseñanza-aprendizaje de logros y competencias a lo largo de sus años de estudio son de vital importancia para el ejercicio de estas habilidades.",
        ],
    },
];

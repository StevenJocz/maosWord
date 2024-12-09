import { ProgramaIngles } from "@/models/Productos.model";
import mao3 from "../../../public/img/maoUno.png";
import mao2 from "../../../public/img/MaoDos.png";
import mao1 from "../../../public/img/maoTres.png";

export const fetchProductosCard = (): ProgramaIngles[] => {
    return [
        {
            A1: {
                niveles: "1 y 2",
                descripcion: "Comienza tu viaje en el aprendizaje del inglés. Domina los conceptos básicos, adquiere vocabulario esencial y empieza a construir frases simples para comunicarte con confianza.",
                habilidades: [
                    "Introducción al vocabulario básico.",
                    "Construcción de frases simples.",
                    "Comprensión auditiva de conversaciones básicas.",
                    "Enfoque en situaciones cotidianas."
                ],
                imagen: mao1
            },
            A2: {
                niveles: "3 y 4",
                descripcion: "Avanza hacia un nivel intermedio. Mejora tus habilidades gramaticales, amplía tu vocabulario y empieza a comunicarte con mayor fluidez en situaciones cotidianas.",
                habilidades: [
                    "Ampliación de vocabulario.",
                    "Mejora de la pronunciación y fluidez.",
                    "Introducción a estructuras gramaticales intermedias.",
                    "Comprensión de diálogos más complejos."
                ],
                imagen: mao2
            },
            B1: {
                niveles: "5, 6 y 7",
                descripcion: "Consolida tu conocimiento y alcanza un nivel intermedio alto. Aprende a expresar ideas complejas, participar en conversaciones detalladas y prepárate para situaciones más desafiantes en inglés.",
                habilidades: [
                    "Dominio de temas gramaticales avanzados.",
                    "Habilidades para mantener conversaciones fluidas.",
                    "Comprensión de textos y audios detallados.",
                    "Preparación para contextos profesionales y académicos."
                ],
                imagen: mao3
            }
        }
    ];
};
// utils/RandomImages.ts
import { MaosImagenes, ImageData } from "@/models";

// Función para obtener 3 imágenes aleatorias
export const getRandomImages = (): ImageData[] => {
    const shuffledImages = [...MaosImagenes]
        .sort(() => Math.random() - 0.5) 
        .slice(0, 3); 
    return shuffledImages;
};
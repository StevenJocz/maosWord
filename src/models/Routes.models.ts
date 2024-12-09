const RUTA_PRIVADA = 'http://localhost:3000';

export  const Routes = {
    HOME : {
        path: '/',
        name: 'Home'
    },
    PRODUCTOS : {
        path: '/paginas/productos',
        name: 'Productos'
    },
    MAOS : {
        path: '/paginas/maos',
        name: "Mao's"
    },
    BLOG : {
        path: '/paginas/blog',
        name: 'Blog'
    },
    CONTACTENOS : {
        path: '/paginas/contáctenos',
        name: 'Contáctenos'
    },
    LOGIN: {
        path: `${RUTA_PRIVADA}`,
        name: 'Empieza ahora'
    },
    PRIVACIDA: {
        path: '/paginas/politicaprivacidad',
        name: 'Política de privacidad'
    } ,
    TERMINOS: {
        path: '/paginas/terminoscondiciones',
        name: 'Términos y condiciones'
    }
    
}

export interface Route {
    path: string,
    name: string
}


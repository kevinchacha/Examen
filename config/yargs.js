let opt = {
    archivo:{
        demand: true,
        alias:`f`,
        description: `Archivo CSV con datos a procesar`
    },
    pais:{
        alias:`c`,
        default: 'ECU',
        description: 'Codigo del pais que se requiere informacion'
    },
    anio:{
        alias:`y`,
        default: 1960,
        description: 'Anio que del que se busca informacion'
    }
}

let optg = {
    archivo:{
        demand: true,
        alias:`f`,
        description: `Archivo CSV con datos a procesar`
    },
    pais:{
        alias:`c`,
        default: 'ECU',
        description: 'Codigo del pais que se requiere informacion'
    },
    anio:{
        alias:`y`,
        default: 1960,
        description: 'Anio que del que se busca informacion'
    }
}

const argv = require('yargs')
    .command('guardar', 'Genera un archivo con el resultadso de la busqueda', opt)
    .command('mostrar', 'Imprime en pantalla el resultado de la busqueda', optg)
    .help()
    .argv;


module.exports = {
    argv
};

const { argv } = require('./config/yargs')
const { crearArchivo, listarArchivo,listarArchivos,mostrar} = require('./buscador/buscar');

//let paramentro = process.argv[2];
//let base = paramentro.split('=')[1];

let comando = argv._[0]
console.log(comando)
switch(comando){
    case 'mostrar':
        mostrar(argv.file,argv.country,argv.year)
            .then(console.log(argv.year,argv.country,argv.file))
            .catch(e => console.log(e));
        console.log(module);
        break;
    case 'guardar':
        guardar(argv.file,argv.country,argv.year,argv.out)
            .then(console.log('Listado'))
            .catch(e => console.log(e));
        console.log(module);
        break;
    default:
        console.log('Comando no valido!')
};


const options = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

const optionsActualizar = {
    descripcion: {
        alias: 'd',
        demand: true

    },
    completado: {
        alias: 'c',
        default: true
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', options)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optionsActualizar)
    .command('borrar', 'Borra un elemento', options)
    .help()
    .argv;


module.exports = {
    argv
}
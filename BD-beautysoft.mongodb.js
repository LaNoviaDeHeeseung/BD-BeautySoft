//creacion de la base de datos
use('Beauty_Soft');

db.createCollection('cliente', {
    validator:{
        $jsonSchema: {
            bsonType: 'object',
            required: [ 'nombre', 'apellido','direccion','correo', 'telefono', 'estado'],
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                apellido: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                direccion: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                correo: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                telefono: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                
                estado: {
                    bsonType: 'boolean',
                    description: 'debe ser verdadero o falso'
                },
                
                rol: {
                    bsonType: 'string',
                    description: 'debe ser un string',
                    default: 'Cliente'
                }
            }
        }
    }
});


db.createCollection('servicios', {
    validator:{
        $jsonSchema: {
            bsonType: 'object',
            required: ['nombre','duracion',  'descripcion', 'precio', 'estado'],
            properties: {
                
                nombre: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                duracion: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                description: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                precio: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto'
                },
                estado: {
                    bsonType: 'boolean',
                    description: 'debe ser verdadero o falso'
                }
            }
        } 
    }
});


db.createCollection('venta', {
    validator:{
        $jsonSchema: {
            bsonType: 'object',
            required: ['fecha', 'hora', 'estado'],
            properties: {
                fecha: {
                    bsonType: 'int',
                    minimum: 2022,
                    maximum: 2030,
                    description: "la fecha debe ser un integer entre 2022 y 2030"
                },
                hora: {
                    bsonType: 'int',
                    minimum: 0,
                    maximum: 23,
                    description: 'debe ser una hora valida',
                },
                estado: {
                    bsonType: 'boolean',
                    description: 'debe ser verdadero o falso'
                }
                
            }
        }
    }
});
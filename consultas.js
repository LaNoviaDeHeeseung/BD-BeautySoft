use('Beauty_Soft');


//insertar un dato en clientes
// db.cliente.insertOne({
//     'nombre': 'Pedro',
//     'apellido': 'Capó',
//     'direccion': 'medellín',
//     'correo': 'pedroca@gmail.com',
//     'telefono': '3109876543',
//     'estado': true
// });


// consulta find clientes
// db.cliente.find({
//     estado : true})


//consulta findOne
// db.cliente.findOne({
//     'nombre' : 'Pedro'
// })


//consulta update para el cliente
// db.cliente.updateOne({
//     nombre : 'Pedro',
// },{
//     $set:{nombre : 'Camilo'}
// })


//confirmar consulta anterior
// db.cliente.findOne({nombre:'Camilo'})


// db.cliente.updateMany({
//     $and: [
//         {'nombre': {$eq:'Misael'}},
//         {'nombre': {$eq:'Mons'}}
//     ]
// },{
//     $set:{estado:true}
// }
// )




//implementacion de lookup
// db.cliente.aggregate([
//         {
//             $lookup: {
//                 from: 'venta',
//                 localField: 'id_cliente',
//                 foreignField: 'fk_cliente',
//                 as: 'ventasCliente',
//             },
//         },
//         {
//             $project: {
                
//                 nombre: true,
//                 apellido: true,
//                 telefono: true,
//                 email: true,
//                 direccion: true,
//                 estado: true,
//                 totalVentas: { $size: '$ventasCliente' },
//             },
//         },
//         {
//             $sort: { totalVentas: -1 },
//         },
//         {
//             $limit: 10,
//         },
//     ]);


//consulta usando limit
// db.servicios.aggregate([
//     {
//         $limit: 12
//     }
// ])



//consulta usando sort
// db.servicios.aggregate([
//     {$sort: {"precio": -1}}
// ])





//! Ejemplo de $unwind y en base a el lookup anterior
//* $unwind, descomponemos el campo "detalles_venta" en documentos individuales
// db.servicios.aggregate([
//     {
//       $lookup: {
//         from: 'detalle_venta',
//         localField: '_id',
//         foreignField: 'fk_servicio',
//         as: 'detallesVenta',
//       },
//     },
//     {
//       $sort: { detallesVenta: -1 },
//     },
//     {
//       $limit: 1,
//     },
//     {
//       $project: {
//         _id: 1,
//         nombre: 1,
//         duracion: 1,
//         descripcion: 1,
//         precio: 1,
//         estado: 1,
//         detalles_venta: '$detallesVenta',
//       },
//     },
//   ]);


//todo:  Consultas para eliminar
//! Consulta de deleteOne en detalle de venta
//* eliminando el primer registro
// db.servicios.deleteOne({"detallesVentas":1});

//! Consulta de deleteMany en detalle de venta
//* Eliminando 101 registros
// db.servicios.deleteMany({
//     $and: [
//         { id_detalle_venta: { $gte: 9000 } },
//         { id_detalle_venta: { $lte: 9100 } },
//     ],
// });

//! Eliminando una colección
// db.cliente.drop();


//! Eliminando la base de datos
// db.dropDatabase();
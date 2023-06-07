const { MongoClient } = require('mongodb');

const url = "mongodb+srv://AriannayChae:chaeminovia@cluster0.hj7mt6d.mongodb.net/?retryWrites=true&w=majority";

//faker
const { faker } = require('@faker-js/faker');




 async function insertDataToCollections() {
    

    const client = new MongoClient(url);

    const clientes = [];
    const servicios = [];
    const ventas = [];

    //bucle 2000 repeticiones
    for (let i = 0; i < 2001; i++) {
        //datos del cliente
        
        let nombreClientes = faker.person.firstName();
        let apellidoClientes = faker.person.lastName();
        let direccionClientes = faker.location.city();
        let correoClientes = faker.internet.email();
        let telefonoClientes = faker.phone.number();
        let estadoClientes = faker.datatype.boolean();
        

        //datos de servicios
        
        let nombreServicios = faker.person.firstName();
        let duracionServicios = JSON.stringify(faker.number.int({ min: 15, max: 120 })) ;
        let descripcionServicios = faker.lorem.text();
        let precioServicios = JSON.stringify(faker.phone.number());
        let estadoServicios = faker.datatype.boolean();
        

        //datos de la venta
        let fechaVentas = faker.number.int({ min: 2022, max: 2030 });
        let horaVentas = faker.number.int({ min: 0, max: 23 });
        let estadoVentas = faker.datatype.boolean();


        //objeto datos del cliente
        const cliente = {
            
            nombre: nombreClientes,
            apellido: apellidoClientes,
            direccion: direccionClientes,
            correo: correoClientes,
            telefono: telefonoClientes,
            estado: estadoClientes,
            
        };

        clientes.push(cliente);

        //objeto datos de servicios
        const servicio = {
            
            nombre: nombreServicios,
            duracion: duracionServicios,
            descripcion: descripcionServicios,
            precio: precioServicios,
            estado: estadoServicios
            
        };
        servicios.push(servicio);

        
        //objeto datos de la venta
        const venta = {
            fecha: fechaVentas,
            hora: horaVentas,
            estado: estadoVentas
            
        };
        ventas.push(venta);
            
    }
// console.log(clientes);

    try {
        await client.connect();

        
        const resultado2 = await client.db('Beauty_Soft').collection('servicios').insertMany(servicios);
        
    }
    catch(e){
        console.log(e);
    }
    finally {
        await client.close();
    }


}

//crearBaseDeDatos();
insertDataToCollections();
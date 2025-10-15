// // let inventario = [
// //   { nombre: "Auriculares", stock: 15 },
// //   { nombre: "Teclado", stock: 8 },
// //   { nombre: "Monitor", stock: 0 }
// // ]

// // function revisarInventario(inventario) {
// //     let reporte = [];
// //     for (let producto of inventario) {
// //     if (producto.stock > 10) {
// //     reporte.push("productos disponible");
// //         } else if (producto.stock <= 10 && producto.stock > 0) {
// //     reporte.push("ultimas unidades " + producto.stock);
// //         } else {
// //         reporte.push("producto agotado");
// //         }
// //     }
// //     return  reporte;

// // }

// // let reporteFinal = ( revisarInventario(inventario) );
// // console.log(reporteFinal);




// // const numeros = [10, 20, 30, 40, 5];

// // const numeroGrnades = numeros.filter( numeros => numeros > 15
    
// // );

// // console.log(numeroGrnades);

// // const productos = [
// //   { nombre: 'Laptop 💻', precio: 1200 },
// //   { nombre: 'Mouse 🖱️', precio: 40 },
// //   { nombre: 'Teclado ⌨️', precio: 150 },
// //   { nombre: 'Monitor 🖥️', precio: 600 }
// // ];


// // const productoCaros= productos.filter(  producto => producto.precio > 500);

// // console.log(productoCaros);


// // const precios = [100, 200, 350];

// // const preciosConImpuesto = precios.map( precio => precio * 1.20);

// // console.log(preciosConImpuesto);

// // const productos = [
// //   { nombre: 'Laptop 💻', precio: 1200 },
// //   { nombre: 'Mouse 🖱️', precio: 40 },
// //   { nombre: 'Teclado ⌨️', precio: 150 },
// //   { nombre: 'Monitor 🖥️', precio: 600 }
// // ];  

// // const prodctosCien = productos.filter(producto => producto.precio > 100).map(producto => producto.nombre);

// // console.log(prodctosCien);

// // const numeros = [5, 10, 20, 15];
// // const sumaTotal = numeros.reduce( (acumulador, numeroActual) => {
// //   // Aquí le decimos qué hacer para que el acumulador crezca
// //   return acumulador + numeroActual;
// // }, 0); // <-- Este 0 es el valor inicial del acumulador

// // console.log(sumaTotal); // El resultado será 50

// // const productos = [
// //   { nombre: 'Laptop 💻', precio: 1200 },
// //   { nombre: 'Mouse 🖱️', precio: 40 },
// //   { nombre: 'Teclado ⌨️', precio: 150 },
// //   { nombre: 'Monitor 🖥️', precio: 600 }
// // ];

// // // Tu código aquí. Recuerda que el 'elementoActual' será un objeto 'producto'.
// // const costoTotal = productos.reduce( (acumulador, producto) => {
// //     return acumulador + producto.precio;
// //   // ¿Qué deberías retornar aquí?
// // }, 0); // Empezamos a sumar desde 0

// // console.log(costoTotal);

// const estudiantes = [
//   { nombre: 'Ana', edad: 22, calificacion: 85, tieneBeca: true },
//   { nombre: 'Juan', edad: 19, calificacion: 55, tieneBeca: false },
//   { nombre: 'Carlos', edad: 25, calificacion: 92, tieneBeca: true },
//   { nombre: 'Maria', edad: 20, calificacion: 78, tieneBeca: false },
//   { nombre: 'Luis', edad: 19, calificacion: 68, tieneBeca: true }
// ];


// // // const obtenerNombresDeBecados  = estudiantes.filter(estudiante => estudiante.tieneBeca === true).map(estudiante => estudiante.nombre);
// // // console.log(obtenerNombresDeBecados);

// // const sumaTotal = estudiantes.reduce((acumulador, estudiante) => {

// // 	return acumulador + estudiante.calificacion ;
// //      }, 0) ;

// // const promedio = sumaTotal / estudiantes.length;
// // console.log(promedio);

// // const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 70).map(estudiante => estudiante.nombre);
// // console.log(estudiantesAprobados);
// // const contarAprobados = (listaEstudiantes) => {
// //     const estudianteAprob = estudiantes.reduce((acumulador, estudiante) => {
        
// //         if (estudiante.calificacion >= 70) {
// //             return acumulador + 1;

// //         }else {
// //             return acumulador;
// //         }
        
        
// //     },0);
// //     return estudianteAprob;
// // };
// // console.log(contarAprobados(estudiantes));

// // let edad = 15;if (edad >= 18) {

// //   console.log("Adulto");

// // } else if (edad >= 13 ) {

// //   console.log("Adolescente");

// // } else {

// //   console.log("Niño");

// // }

// // let edad = 13;

// // switch (edad ) {
// //   case 18:
// //     console.log("Tienes 18 años, eres un adulto joven.");
// //     break; // 'break' es como decir "listo, ya encontré mi opción".
// //   case 25:
// //     console.log("Tienes 25 años, estás en la flor de la vida.");    
// //     break;
// //     case 13:
// //     console.log("Tienes 13 años, eres un adolescente.");
// //     break;
// //   default: // 'default' es como el 'else', se ejecuta si no coincide ningún 'case'.
// //     console.log("Edad no especificada en los casos.");
// // }    

// // let diaDeLaSemana = "martes";

// // switch (diaDeLaSemana) {
// //   case "lunes":
// //     console.log("¡A empezar la semana con energía!");
// //     break; // 'break' es como decir "listo, ya encontré mi opción".
// //   case "martes":
// //     console.log("Hoy es martes.");
// //     break;
// //   case "viernes":
// //     console.log("¡Casi es fin de semana! 🎉");
// //     break;
// //   default: // 'default' es como el 'else', se ejecuta si no coincide ningún 'case'.
// //     console.log("Es otro día de la semana.");
// // }
// // let finDeSemana = "sabado";

// // switch (finDeSemana) {
// // 	case "sabado":
// // 	case "domingo" :
// // 		console.log("un fin de semana");
// // 		break;
// // 	default: 
	
// // 		console.log("otro dia de la semana")
	

// // }
// // Esta función simula una tarea que toma tiempo.
// // function simularDescarga() {
// //   console.log("Comenzando la descarga...");
// //   // setTimeout simula una espera de 2 segundos (2000 ms)
// //   return new Promise(resolve => {
// //     setTimeout(() => {
// //       resolve("✅ Descarga completa");
// //     }, 2000);
// //   });
// // }

// // // Usamos async/await para manejar la espera.
// // async function ejecutarDescarga() {
// //   const mensaje = await simularDescarga(); // El código se pausa aquí
// //   console.log(mensaje);
// // }

// // ejecutarDescarga();
// // console.log("Mientras tanto, puedo hacer otras cosas...");

// // Esta función usará fetch para obtener un usuario aleatorio
// // async function obtenerUsuario() {
// //   console.log("Pidiendo usuario al servidor...");
  
// //   // 1. Usamos await para esperar la respuesta de la API
// //   const respuesta = await fetch('https://api.randomuser.me/');
  
// //   // 2. La respuesta inicial no son los datos, sino un objeto de respuesta.
// //   //    Necesitamos convertirlo a un formato que JavaScript entienda (JSON).
// //   //    Esta conversión también toma tiempo, así que necesita su propio await.
// //   const datos = await respuesta.json();

// //   console.log(datos.results[0].name.first +" "+ datos.results[0].name.last);
// // }

// // obtenerUsuario();

// async function obtenerUsuarioConSeguridad() {
//     console.log("Pidiendo usuario al servidor...");
//   try {
//     const respuesta = await fetch('https://api.randomuser.me/');
//     const datos = await respuesta.json();
//     console.log(datos.results[0].name.first +" "+ datos.results[0].name.last);

//     // Aquí va el código que podría fallar (como el fetch)
    
//   } catch (error) {
//     // Si hay un error, se ejecuta este bloque
//     console.log("🚫 Hubo un error:", error);
//   }
  
// }
// obtenerUsuarioConSeguridad();\

// Espera a que todo el contenido del HTML se cargue
document.addEventListener('DOMContentLoaded', function() {

    // 1. Selecciona el botón del carrito por su ID
    const cartButton = document.getElementById('cart-button');

    // 2. Verifica si el botón realmente existe
    if (cartButton) {
        // 3. Añade un "escuchador de eventos" que se activa con un 'click'
        cartButton.addEventListener('click', function(event) {
            
            // Previene que el enlace '#' recargue la página
            event.preventDefault(); 
            
            // 4. Muestra una alerta simple
            alert('Has hecho clic en el carrito. ¡Aquí puedes agregar la lógica para mostrar los productos!');
            
        });
    }

});
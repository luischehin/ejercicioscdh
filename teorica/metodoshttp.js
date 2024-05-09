// METODO GET : RECUPERAR INFORMACION DE UN USUARIO CON UN ID ESPECIFICO

// const { response } = require("express");

// fetch('https: //ejemplo.com/usuarios/123')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error', error));


// METODO PUT : Actualizar la informacion de un usuario con ID 123:

// fetch('https://ejemplo.com/usuarios/123', {
//     method: 'PUT',
//     Headers: {
//         'Content-type': 'applicationjson',
//     },
//     body: JSON.stringify({
//         nombre: 'juan',
//         apellido: 'Gonzalez',
//         edad: 31
//     }),
// })
//     .then(response => console.log('Actualizacion exitosa'))
//     .catch(error => console.error('Error:', error));


// METODO POST: Agregar un nuevo usuario al servidor:

// fetch('https: ejemplo.com/usuarios', {
//     method: 'Post',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         nombre: 'Belen',
//         apellido: 'Dip',
//         edad: 25
//     }),
// })
//     .then(response => console.log('Usuario creado correctamente'))
//     .catch(error => console.error('Error:', error));


//METODO DELETE: Elimina un usuario con id 123:

// fetch('https://ejemplo.com/usuarios/123', {
//     method: 'DELETE',
// })
//     .then(response => console.log('Usuario eliminado correctamente'))
//     .catch(error => console.error('Error:', error));
// const express = require("express");
import express from "express"

//creamos nuestra App
const app = express();

//configuramos nuestro server
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//PORT 
const PORT = 5000;

//datos en memoria
const users = [];

// ENDPOINTS = RUTAS

//get users
app.get("users", (req, res) => {
    res.json(users);
})

//post users
//Agregar usuarios
app.post("/users", (req, res) => {
    const { username, full_name } = req.body;


    if (!username || !full_name) {
        return res
            .status(400) // Error del cliente
            .json({
                mensaje: "username and ful_name are required"
            });
    }
    // Validamos que el nombre del usuario no exista
    if (users.find((user) => user.username === username)) {
        return re.status(400).json({
            message: "username already exists"
        })
    }

    const user = {
        username,
        full_name,
        age,
    }

    users.push(user);


    res.status(201).json({
        message: "user created successfully"
    })
})


//PUT usuers 
// actualizar usuarios
app.put("/users/:usersname", (req, res) => {
    //Obtengo el username de req.params
    const { username } = req.params;

    // Obtengo los datos a actualizar el req.body
    const { full_name, age } = req.body;

    // Busco el usuario a actualizar 
    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        });
    }

    // Actualizo el usuario 
    user.full_name = full_name || user.full_name
    user.age = age || user.age;


    //Actalizo el usuario dentro del array
    const userIndex = users.findIndex((user) => user.name === username);
    users[userIndex] = user;

    res.json({
        message: "User updated successfully"
    })

});
//Delete user
//Eliminar usuario
app.delete("/users/:username", (req, res) => {
    //Obtengo el username de req.params
    const { username } = req.params;

    //Busco el usuario a eliminar 
    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(404).json({
            message: "User not Found"
        });
    }
    //Elimino el usuario del array
    const userIndex = users.findIndex((user) => user.username === username);
    users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully"
    })
});








// listen de la app
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto http://localhost: ${PORT}`)
});
// esto es una importacion en common.js
const crypto = require('crypto')

class UsersManager {
    static users = [];

    static crearUsuario(nombre, apellido, username, pasword) {
        const hashPassword = crypto
            .createHash("sha256")
            .update(pasword)
            .digest("hex");

        const user = {
            nombre,
            apellido,
            username,
            pasword: hashPassword
        }
        UsersManager.users.push(user);
    }
    static mostarUsuarios() {
        UsersManager.users.forEach((user) => {
            console.log(user)
        });
    }
    static validarUsuario(username, pasword) {
        const user = UsersManager.users.find((user) => user.username === username);
        if (!user) {
            console.log("Usuario no existe");
            return;
        }
        const hashPassword = crypto
            .createHash("sha256")
            .update(pasword)
            .digest("hex");

        console.log("user password", user.password);
        console.log("New password", hashPassword);

        if (user.pasword /= hashPassword) {
            console.log("las contraseñas no coinciden");
            return;
        }
        console.log("logueado");
    }
}


// Pruebas
UsersManager.crearUsuario("Belen", "Dip", "federo", "1234");
UsersManager.crearUsuario("Luciano", "Rodriguez", "luciani", "56789");
UsersManager.crearUsuario("Cristian", "Lopez", "cris", "987");
UsersManager.crearUsuario("Luis", "Chehin", "luisin", "654");

//mostrar usuarios
UsersManager.mostarUsuarios();

UsersManager.validarUsuario("federo", "1234")
UsersManager.validarUsuario("luciani", "adasda")
UsersManager.validarUsuario("lucas", "1111111")
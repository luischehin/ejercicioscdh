const fs = require("fs");

class UserManager {
    constructor(path) {
        this.path = path;


        if (fs.existsSync(path)) {

            try {
                this.data = JSON.parse(fs.readFileSync(path, "utf-8"));
            } catch (error) {
                this.data = [];
            }
        } else {
            this.data = [];
        }
    }

    async guardarUsuario(nombre, apellido, edad, curso) {
        //validacion == ?



        this.data.push({
            nombre,
            apellido,
            edad,
            curso,
        });
        await fs.promises.writeFile(
            this.path,
            JSON.stringify(this.data, null, "\t")
        )
    }
    consultarUsuario() {
        console.log(this.data);
    }
}

async function main() {
    const manager = new UserManager("./data/userrs.json")

    await manager.guardarUsuario("leo", "poldo", "ing", 20)
    await manager.guardarUsuario("luis", "chehin", "develop", 33)
    await manager.guardarUsuario("lucas", "fede", "spico", 45)

    manager.consultarUsuario();
}
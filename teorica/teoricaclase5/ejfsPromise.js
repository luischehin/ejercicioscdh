const { Console, log } = require("console");
const fs = require("fs")

const path = require("path");

const filePath = path.json(__dirname, "data/textoCb.txt")

async function operaciones() {
    try {

        await fs.promises.writeFile(filePath, " mi primer archivo en promesas")

        let resultado = await fs.promises.readFile(filePath, "UTF-8")
        console.log(resultado);

        await fs.promises.appendFile(filePath, "\n Mas informacion desde promesas");

        resultado = await fs.promises.readFile(`${filePath}`, "utf-8"); // aqui se corta la ejecucion porque salio un error 
        console.log(resultado);
    } catch (error) {
        console.log("error", error);
    }
}
operaciones();
// Ejemplo de let :

let i= 0 ;
function foo (){
    i =1 ;
    let j = 2 ;
    if (true) {
        console.log (i); // 1
        console.log (j); //2 
    }
}
foo ();

function foo (){
    let i = 0;
    if (true){
        // Seria otra variable 1
        // solo para el bloque if
        let i =1;
        console.log(i); // 1
    }
    console.log (i) // 0
}
foo ();


// Aqui la variable i es global y la j es local.
// Pero si declaramos una variable con let dentro un bloque, que a su vez esta dentro de una funcion, la variable pertenece solo a ese bloque.

// Ejemplo de let

// Fuera de bloque donde se delcara con let, la variable no esta definida.

function foo (){
    if(true){
        let i =1;
    }
    // ReferenceError:
    //i is not defined
    console.log(i);
}
foo();

//  Ejemplo de CONST

// const i = 0;
// // type error:
// // assignment to constant variable
// i=1 ;
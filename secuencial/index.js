const { taskOne, taskTwo } = require("./tasks");
// para que se imprima el valor retornado de la función
async function main (){
    try{
        console.time("tiempo")
        const results = await Promise.all([taskOne(), taskTwo()]) //las dos tareas se ejecutan al mismo tiempo, ahora son 4 segundos, porque son 4 segundos de taskOne() y 2s de taskTwo()
        // const valueOne = await taskOne(), valueTwo = await taskTwo();
        console.timeEnd("tiempo")
        console.log(`task One returned: ${results[0]}; task Two returned: ${results[1]}`)
    }
    catch(e){
        console.log(e)
    }
}
main();
// puede salir en undefined en primervalor porque no se ejecutó
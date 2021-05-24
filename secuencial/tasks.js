const util = require('util'),
// funciones qe usan callbacks a que usan promesas o async-await
sleep = util.promisify(setTimeout)
// función asíncrona
// setTimeout()
module.exports = {
    async taskOne(){
        try{   
            // throw new Error("Some problem"); //para crear errores
            await sleep(3000) // 4s en ejecutarse
            return "vamor dos"
        } 
        catch(e){
            console.log(e)
        }
    },
    async taskTwo(){
        //2s en ejecutarse
        try{
            // throw new Error("Some problem")
            await sleep(2000)
            return "one value"
        }
        catch(e){
            console.log(e)
        }
    }
    // time total = 6s
    //ahora, con el throw error el taskOne() será ignorado (el resto del código) y no se pasará a la taskTwo
    // DE HECHO, CANCELA EL PROGRAMA
}
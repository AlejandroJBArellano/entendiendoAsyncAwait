async const requestHandler = (req, res)=>{
    // esto es muy fácil de leer
    //try trata de ejecutar un código
    try{
        // await indica euq el código tomará tiempo y se guarda en constantes (en caso de que te devuelva algo)
        // para que funcione tiene que llevar la palabra async al inicio de la función 
        const user = await User.findById(req.userId),
        tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        //esto no se guarda en constante porque no te devuelve nada en sí
        await tasks.save();
        res.send(`tasks completed`)
    }
    // para los errores
    catch(e){
        res.send(e)
    }
}
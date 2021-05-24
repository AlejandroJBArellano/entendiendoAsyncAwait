//consulta sencilla, pero difícil de leer
let requestHandler = (req, res)=>{ 
    User.findById(req.userId, (err, user)=>{ //pirámide de la muerte (callback hell)
        err ? res.send(err): Tasks.findById(user.tasksId, (err, tasks)=>{
            err ? res.send(err) : tasks.completed = true; tasks.save((err)=>{
                err ? res.send(err) : res.send("Task Completed")
            }) 
        })
    })
    // la solución a un código tan largo, son las promesas UwU (checar promesas.js)
    //como el código de arriba se va a tardar en cargar, node.js ni le importa y ejecuta el código que seguiría en esta función
}
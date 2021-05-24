let requestHandler = (req,res) =>{
    User.findById(req.userById)
        .then((user)=>{
            res.send(user)
        })
        .catch((err)=>{
            res.send(err)
        })
}
// se sintetizn muchas líneas de código
let requestHandler = (req,res) =>{
    User.findById(req.userById)
        .then((user)=>{
            return Tasks.findById(user.tasksId)
        })
        .then(tasks => {
            tasks.completed = true
            return tasks.save()
        })
        .then(_=>res.send(`Tasks Completed`))
        .catch((err)=>{
            res.send(err)
        })
}
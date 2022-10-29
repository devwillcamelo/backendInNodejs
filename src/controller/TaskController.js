const TaskModel = require ('../model/TaskModel');

class TaskController{

    async show(req, res){
        await TaskModel.findById(req.params.id)
        .then(response => {
          if(response)
            return res.status(200).json(response);
          else
            return res.status(404).json({error: 'tarefa não encontrada'});
        })
        .catch(error => {
          return res.status(500).json(error);
        });
      }

}

module.exports = new TaskController();
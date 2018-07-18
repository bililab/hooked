const db = require('../config/db.config.js')

exports.create =(req, res)=>{
    db.event.create({
        title:req.body.title,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description,
        event_photo: req.body.event_photo,
        map_photo: req.body.map_photo,
    }). then((event)=>{
        res.json(event)
    }).catch((error)=>{
        res.status(501).send({error: 'problem entering event into database'})
    })
}

exports.findAll =(req, res) =>{
    db.event.findAll(). then((event)=>{
        res.json(event)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve event'})
    })
}

exports.delete =(req,res)=>{
    const id = req.params.id;
    db.event.destory({
        where:{id:id}
    }).then(deleteEvent =>{
        res.json(deleteEvent)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete Event'})
    })
}
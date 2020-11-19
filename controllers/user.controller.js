const mongoose = require('mongoose');

const User = mongoose.model('User');

const addUser = (req, res, next) => {
    var user = new User();
    user.fullname = req.body.name;
    user.email = req.body.email;
    user.save((err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            if (err.code == 11000) {
                res.status(422).send(['Duplicate email']);
            }
            else
                return next(err);
        }
    });
}

const deleteUser = (req, res, next) => {
    User.findByIdAndDelete({ id: req.id }, (err, docs) => {
        if (err) {
            return next(err);
        } else {
            res.send(docs)
        }
    })
}

const getUsers = (req,res,next) => {
    User.find({},(err,docs)=>{
        if(err){
            return next(err)
        }else{
            res.json({users : docs})
        }
    })
}

module.exports = {
    addUser,
    deleteUser,
    getUsers
}
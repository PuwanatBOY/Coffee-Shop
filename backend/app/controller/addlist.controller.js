const db = require("../models");
const AddList = db.addlist;

exports.create = (req, res) => {
    if (!req.body.nameCargo) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const addlist = new AddList({
        nameCargo: req.body.nameCargo,
        type: req.body.type,
        codeCargo: req.body.codeCargo,
        quantity: req.body.quantity,
        price: req.body.price,
        img: req.body.img,
        file: req.body.file,
        produceDate: req.body.produceDate,
        typeOS: req.body.typeOS,
        size: req.body.size,
        display: req.body.display,
        cpu: req.body.cpu,
        ram: req.body.ram,
        rom: req.body.rom,
        externalDrive: req.body.externalDrive,
        camFace: req.body.camFace,
        camBack: req.body.camBack,
        batt: req.body.batt,
        twoSim: req.body.twoSim,
        date: req.body.date
    });

    console.log(addlist)

    addlist
        .save(addlist)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the addlist."
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    AddList.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Register."
            });
        });
};

// Find a single Register with an id
exports.findUsername = (req, res) => {
    const dataObj = {
            username: req.params.username.split(":"),
            password: req.params.password.split(":")
        }
        //console.log("Here " + dataObj.username + ", " + dataObj.password);
    AddList.find({ username: dataObj.username, password: dataObj.password })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Register with id " + id });
            else res.send({ username: dataObj.username, password: dataObj.password });
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Register with id=" + id });
        });
};

// Update a Register by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    AddList.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Register with id=${id}. Maybe Register was not found!`
                });
            } else res.send({ message: "Register was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Register with id=" + id
            });
        });
};

// Delete a Register with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    AddList.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Register with id=${id}. Maybe Register was not found!`
                });
            } else {
                res.send({
                    message: "Register was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Register with id=" + id
            });
        });
};

// Delete all Register from the database.
exports.deleteAll = (req, res) => {
    AddList.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Register were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Register."
            });
        });
};

// Find all published Register
exports.findAllPublished = (req, res) => {
    AddList.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Register."
            });
        });
};

exports.findId = (req, res) => {
    AddList.findById(req.params.id)
        .exec(function(err, addList) {
            if (err) {
                console.log("Error retriveing item")
                console.log(err)
            } else {
                res.json(addList)
                console.log("retrieveing success")
            }
        })
}
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
                message: err.message || "Some error occurred while creating the Product."
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
                message: err.message || "Some error occurred while retrieving Product."
            });
        });
};

// Find a single Product with an id
exports.findUsername = (req, res) => {
    const dataObj = {
            username: req.params.username.split(":"),
            password: req.params.password.split(":")
        }
        //console.log("Here " + dataObj.username + ", " + dataObj.password);
    AddList.find({ username: dataObj.username, password: dataObj.password })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Product with id " + id });
            else res.send({ username: dataObj.username, password: dataObj.password });
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Product with id=" + id });
        });
};

// Update a Product by the id in the request
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
                    message: `Cannot update Product with id=${id}. Maybe Product was not found!`
                });
            } else res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Product with id=" + id
            });
        });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    AddList.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
                });
            } else {
                res.send({
                    message: "Product was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Product with id=" + id
            });
        });
};

// Delete all Product from the database.
exports.deleteAll = (req, res) => {
    AddList.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Product were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Product."
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
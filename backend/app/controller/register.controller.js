const db = require("../models");
const Register = db.register;

// Create and Save a new Register
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Register
    const register = new Register({
        usernameco: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        sex: req.body.sex,
        password: req.body.password,
        check: req.body.check,
        email: req.body.email,
        tel: req.body.tel,
        Hnum: req.body.Hnum,
        province: req.body.province,
        district: req.body.district,
        parish: req.body.parish,
        zip: req.body.zip,
        date: req.body.date
    });

    // Save Register in the database
    register
        .save(register)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Register."
            });
        });
};

// Retrieve all Register from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Register.find(condition)
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
    Register.find({ username: dataObj.username, password: dataObj.password })
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

    Register.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

    Register.findByIdAndRemove(id)
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
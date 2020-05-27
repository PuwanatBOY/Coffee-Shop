const db = require("../models");
const Employee = db.employee;

const student = [{
        idem: 1,
        username: 'CPE',
        password: '12345678',
        firstName: 'Puwanat',
        lastName: 'Torcheewee'
    },
    {
        idem: 2,
        username: 'BOY',
        password: '11111111',
        firstName: 'Kang',
        lastName: 'Krub'
    }
];


exports.create = () => {
    for (let i = 0; i < student.length; i++) {
        const employee = new Employee({
            idem: student[i].idem,
            username: student[i].username,
            password: student[i].password,
            firstName: student[i].firstName,
            lastName: student[i].lastName
        });
        //console.log(employee);
        employee.save(employee);
    }
};

exports.deleteAll = () => {
    Employee.deleteMany({})
        .then(data => {})
        .catch(err => {});
};

exports.findEmployee = (req, res) => {
    const dataObj = {
            username: req.params.username.split(":"),
            password: req.params.password.split(":")
        }
        //console.log("Here " + dataObj.username + ", " + dataObj.password);
    Employee.find({ username: dataObj.username, password: dataObj.password })
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
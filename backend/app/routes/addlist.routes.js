module.exports = app => {
    const addlist = require("../controller/addlist.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", addlist.create);

    // Retrieve all Tutorials
    router.get("/", addlist.findAll);

    // Retrieve all published Tutorials
    router.get("/published", addlist.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:username/:password", addlist.findUsername);

    // Update a Tutorial with id
    router.put("/:id", addlist.update);

    // Delete a Tutorial with id
    router.delete("/:id", addlist.delete);

    // Create a new Tutorial
    router.delete("/", addlist.deleteAll);

    router.get("/:id", addlist.findId);

    app.use('/api/addlist', router);
};
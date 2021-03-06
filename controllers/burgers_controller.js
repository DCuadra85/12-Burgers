const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burger: data
        };
        console.log("HBSObject", hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", (req, res) => {
    console.log(req.body.burgerName);
    burger.insertOne(
    ["burgerName", "devour"], 
    [req.body.burgerName, req.body.devoured],
    (result) => {
        console.log(req.body.burgerName, req.body.devoured)
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", (req, res) => {
    console.log("Body Request", req.body);
    var condition = "id = " + req.params.id;

    console.log("Condition", condition);

    burger.updateOne({devour: req.body.devoured}, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        console.log(req.body.devoured)
        res.status(200).end();
    })
});

module.exports = router;
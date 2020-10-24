var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", (req, res) => {
    console.log(req.body.name);
    burger.insertOne(["burgerName", "devour"], [req.body.burgerName, req.body.devour],
    (result) => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", (req, res) => {
    console.log("Body Request", req.body);
    var condition = "id = " + req.params.id;

    console.log("Condition", condition);

    burger.updateOne({devour: req.body.devour}, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

module.exports = router;
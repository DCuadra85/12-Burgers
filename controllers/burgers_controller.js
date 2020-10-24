const express = require("express")
const router = expess.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
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

});

module.exports = router;
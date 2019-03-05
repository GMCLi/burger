var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/index");
});


router.get("/index", function (req, res) {
    burger.selectAll(function (burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/index/create", function (req, res) {
    console.log(req.body);
    burger.create(req.body.burger_name, function (result) {
        console.log(result)
        res.redirect("/index");
    });
});

router.put("/index/update", function (req, res) {

    // console.log("condition", condition);

    burger.updateOne(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/index");
    });
});

//Export routes for server.js
module.exports = router;
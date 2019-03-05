//Import Orm object to interact with database for selectAll, insertOne and updateOne
var orm = require("../config/orm");

var burger = {
    //selectAll()
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    //insertOne()
    create: function (name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
                name, false], cb);
    },

    //updateOne()
    updateOne: function (id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    }
};

//Export Database Functions for burgers_controller.js
module.exports = burger;
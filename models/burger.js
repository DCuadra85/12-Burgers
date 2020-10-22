const orm = require("../config/orm.js");

const burger = {
    selectAll: function(callback){
        orm.selectAll("value", (res) => {
            callback(res);
        });
    },

    insertOne: function(column, value, callback){
        orm.insertOne("value", (res) => {
            callback(res);
        });
    },

    updateOne: function(objectcolumnvalue, condition, callback){
        orm.updateOne("value", objectcolumnvalue, condition, (res) => {
            callback(res);
        });
    },
    
};

module.exports = burger
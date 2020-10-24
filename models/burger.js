const orm = require("../config/orm");

const burger = {
    selectAll: function(callback){
        orm.selectAll("burger", (res) => {
            callback(res);
        });
    },

    insertOne: function(cols, vals, callback){
        orm.insertOne("burger", cols, vals, (res) => {
            callback(res);
        });
    },

    updateOne: function(objColVals, condition, callback){
        orm.updateOne("burger", objColVals, condition, (res) => {
            callback(res);
        });
    },
    
};

module.exports = burger
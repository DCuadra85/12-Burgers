const orm = require("../config/orm");

//mvc, act 16 reference
//const burger calls the primary functions out of the orm
//which is then communicating to the DB.

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
const connection = require("./connection.js");

const orm = {
    selectAll: function(tableValue, cb){
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableValue], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(tableInput, cb){
        const queryString = "INSERT INTO burgers (??) VALUES (?)"

        console.log(queryString);
        queryString += " SET ";
        queryString += objToSql(tableCol);
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },

    updateOne: function(tableValue, tableCol, condition, cb){
        const queryString = "UPDATE " + tableValue;
        
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        })
    },
};

module.exports = orm;
const connection = require("./connection.js");

function addQuestionMark(num) {
    let array = [];
    for (let i = 0; i < num; i++){
        array.push("?");
    };
    return array.toString();
}

const orm = {
    selectAll: function(tableValue, cb){
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableValue], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(table, tableCol, tableValue, cb){
        const queryString = "INSERT INTO burgers" + table;
       //activity 16 uses this method to complete the string
        queryString += " (";
        queryString += tableCol.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += addQuestionMark(tableValue.length);
        queryString += ")";

        console.log(queryString);
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
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
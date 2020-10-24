var connection = require("./connection.js");


//Array function passes through ? value where needed for SQL to work: ref MVC, act 16
function printQuestionMarks(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
}

// loop through the keys and push the key/value as a string int arr: ref MVC, act 16
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

//orm drawn from MVC - activity 16
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO burger" + table;
        //activity 16 uses this method to complete the string
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ")";

        console.log(queryString);
        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

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
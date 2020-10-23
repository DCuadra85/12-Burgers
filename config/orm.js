const connection = require("./connection.js");


//Array function passes through ? value where needed for SQL to work: ref MVC, act 16
function addQuestionMark(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push("?");
    };
    return array.toString();
}

// loop through the keys and push the key/value as a string int arr: ref MVC, act 16
function objToSql(ob) {
    let arr = [];
    for (const key in ob) {
        const value = ob[key];
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
const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO burgers" + table;
        //activity 16 uses this method to complete the string
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += addQuestionMark(vals.length);
        queryString += ")";

        console.log(queryString);
        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        const queryString = "UPDATE " + table;
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
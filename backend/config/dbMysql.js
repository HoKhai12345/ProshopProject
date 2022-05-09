import mysql from "mysql2";

const dbConMysql = mysql.createConnection({
  host: "mariadb",
  user: "root",
  password: "hungna",
  database: "db_daitamphat",
});

export default dbConMysql;

// var mysql = require('mysql');

// const dbConn = mysql.createConnection({
//             host: "mariadb",
//             user: "root",
//             password: "hungna",
//             database: "db_daitamphat"
//           });

//  dbConn.connect(function(error){
//  	if (error) throw error
//  		console.log("Connect thành công");
//  });

// module.exports = dbConn;

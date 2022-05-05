
import mysql from 'mysql';




export const dbConnectMysql = (query)=>{
   const dbConMysql =  mysql.createConnection({
        host: "mariadb",
        user: "root",
        password: "hungna",
        database: "db_daitamphat"
      });
     
      dbConMysql.connect(function(error){
          if (error) {throw error}else{
                    console.log("Connect thành công______________________________________________________________________________");
                    return dbConMysql;
                    //    dbConMysql.query(query , (err , res)=>{
                    //      if(err){
                    //          console.log("LỖI ĐÃ XẢY RA",err);
                    //      }else{
                    //           console.log("THÀNH CÔNG", res);
                    //          return res
                    //      }
                    //  })
                    
          }
               // console.log("Connect thành công______________________________________________________________________________");
});
     return dbConMysql;
}
export default dbConnectMysql


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
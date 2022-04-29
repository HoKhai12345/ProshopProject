
import mysql from 'mysql';




const dbConnectMysql = ()=>{
   const dbConMysql =  mysql.createConnection({
        host: "mariadb",
        user: "root",
        password: "hungna",
        database: "db_daitamphat"
      });
     
      dbConMysql.connect(function(error){
 if (error) throw error
     console.log("Connect thành công______________________________________________________________________________");
});
}
export default dbConnectMysql
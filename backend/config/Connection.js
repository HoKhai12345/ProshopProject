
import mysql from 'mysql';

const Connection = async ()=>{
   const dbConMysql = await  mysql.createConnection({
        host: "mariadb",
        user: "root",
        password: "hungna",
        database: "db_daitamphat"
      });
     console.log("MYSQL",dbConMysql);
     return dbConMysql
}
export default Connection

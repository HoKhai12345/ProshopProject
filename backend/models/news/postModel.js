import dbConnectMysql from "../../config/dbMysql.js";
const Post = (posts)=>{
    this.id = posts.id;
    this.price = posts.price;
    this.description = posts.description;
    this.categoryId = posts.categoryId;
    this.created_at = new Date();
    this.updated_at = new Date();
}

 Post.getListData =async (keyword , categoryId , limit = 10 , offset = 0 , result) => {
    // console.log('dbConnectMysql', dbConnectMysql().query())
    console.log("SELECT * FROM data_news_version_2_posts where categoryId =" + categoryId + " and title LIKE  '%" + keyword + "%'" + " ORDER BY id DESC" + " limit " + offset + "," + limit  );
     await dbConnectMysql().query("SELECT * FROM data_news_version_2_posts where categoryId =" + categoryId + " and title LIKE  '%" + keyword + "%'" + " ORDER BY id DESC" + " limit " + offset + "," + limit  , (err , res)=>{
     if(err){
            console.log("LỖI ĐÃ XẢY RA",err);
            result(null , err);

        }else{
             console.log("THÀNH CÔNG", res);
             result(null , res);
        }})
}
 export default Post;
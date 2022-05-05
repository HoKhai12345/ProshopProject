// import db from '../../config/dbMysql.js';
import Connection  from  '../../config/Connection.js';
import Product from '../productModel.js'

 const getNewsFindCategoryId = async (categoryId)=>{
     Connection().connect(function(err) {
        if (err) throw err;
        Connection().query("select * from data_news_version_2_posts where categoryId=?"+categoryId, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          return result;
        });
      })
    // const products = await Product.find();
    // return products

};
export default { getNewsFindCategoryId }
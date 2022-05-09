// import db from '../../config/dbMysql.js';
import Connection from "../../config/Connection.js";
import Product from "../productModel.js";

const getNewsFindCategoryId = async (categoryId) => {
  return await Connection.promise().query(
    "select * from data_news_version_2_posts where categoryId=?" + categoryId
  );
  // const products = await Product.find();
  // return products
};
export default { getNewsFindCategoryId };

import dbConnectMysql from "../../config/dbMysql.js";
const Post = (posts) => {
  this.id = posts.id;
  this.price = posts.price;
  this.description = posts.description;
  this.categoryId = posts.categoryId;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Post.getCountSearch = async (keyword, result) => {
  console.log(
    "SELECT count(data_news_version_2_posts.id) as countData FROM data_news_version_2_posts where  title LIKE  '%" +
      keyword +
      "%'"
  );
  const [rows, fields] = await dbConnectMysql
    .promise()
    .query(
      "SELECT count(data_news_version_2_posts.id) as countData FROM data_news_version_2_posts where  title LIKE  '%" +
        keyword +
        "%'"
    );
  return rows;
};

Post.getDataSearch = async (keyword, limit = 10, offset = 0, result) => {
  const [rows, fields] = await dbConnectMysql
    .promise()
    .query(
      "SELECT title , name , id , categoryId , created_at , thumb , photo , photo_data , slugs , description FROM data_news_version_2_posts where  title LIKE  '%" +
        keyword +
        "%'" +
        " ORDER BY id DESC" +
        " limit " +
        offset +
        "," +
        limit
    );
  return rows;
};

Post.getListData = async (
  keyword,
  categoryId,
  limit = 10,
  offset = 0,
  result
) => {
  // console.log('dbConnectMysql', dbConnectMysql().query())
  //   console.log(
  //     "SELECT * FROM data_news_version_2_posts where categoryId =" +
  //       categoryId +
  //       " and title LIKE  '%" +
  //       keyword +
  //       "%'" +
  //       " ORDER BY id DESC" +
  //       " limit " +
  //       offset +
  //       "," +
  //       limit
  //   );
  const [rows, fields] = await dbConnectMysql
    .promise()
    .query(
      "SELECT * FROM data_news_version_2_posts where categoryId =" +
        categoryId +
        " and title LIKE  '%" +
        keyword +
        "%'" +
        " ORDER BY id DESC" +
        " limit " +
        offset +
        "," +
        limit
    );
  return rows;
};

Post.getDataByUuId = async (slug, result) => {
  // console.log('dbConnectMysql', dbConnectMysql().query())
  //   console.log(
  //     "SELECT * FROM data_news_version_2_posts where categoryId =" +
  //       categoryId +
  //       " and title LIKE  '%" +
  //       keyword +
  //       "%'" +
  //       " ORDER BY id DESC" +
  //       " limit " +
  //       offset +
  //       "," +
  //       limit
  //   );
  console.log(
    "SELECT * FROM data_news_version_2_posts where slugs = '" + slug + "'"
  );
  const [rows, fields] = await dbConnectMysql
    .promise()
    .query(
      "SELECT * FROM data_news_version_2_posts where slugs = '" + slug + "'"
    );
  return rows;
};
Post.getDataRelaredByslug = async (slug, categoryId, result) => {
  // console.log('dbConnectMysql', dbConnectMysql().query())
  //   console.log(
  //     "SELECT * FROM data_news_version_2_posts where categoryId =" +
  //       categoryId +
  //       " and title LIKE  '%" +
  //       keyword +
  //       "%'" +
  //       " ORDER BY id DESC" +
  //       " limit " +
  //       offset +
  //       "," +
  //       limit
  //   );
  // console.log("SELECT * FROM data_news_version_2_posts where slugs != '" + slug + "' and categoryId = "+categoryId+" limit 6");
  const [rows, fields] = await dbConnectMysql
    .promise()
    .query(
      "SELECT * FROM data_news_version_2_posts where slugs != '" +
        slug +
        "' and categoryId = " +
        categoryId +
        " limit 6"
    );
  return rows;
};

Post.getDataInThisCateByslug = async (slug, categoryId, result) => {
  console.log(
    "SELECT * FROM data_news_version_2_posts where slugs != '" +
      slug +
      "' and categoryId = " +
      categoryId +
      " limit 5,6"
  );
  const [rows, fields] = await dbConnectMysql
    .promise()
    .query(
      "SELECT * FROM data_news_version_2_posts where slugs != '" +
        slug +
        "'  and categoryId = " +
        categoryId +
        " limit 5,6"
    );
  return rows;
};

Post.getCountPostCate = async (result) => {
  console.log(
    "SELECT data_news_version_2_category.name , count(data_news_version_2_posts.id) as countPost from data_news_version_2_posts , data_news_version_2_category.slugs INNER JOIN data_news_version_2_category ON data_news_version_2_posts.categoryId = data_news_version_2_category.id GROUP BY data_news_version_2_posts.categoryId"
  );
  const [rows, fields] = await dbConnectMysql
    .promise()
    .query(
      "SELECT data_news_version_2_category.name  , count(data_news_version_2_posts.id) as countPost , data_news_version_2_category.slugs from data_news_version_2_posts INNER JOIN data_news_version_2_category ON data_news_version_2_posts.categoryId = data_news_version_2_category.id GROUP BY data_news_version_2_posts.categoryId"
    );
  return rows;
};

Post.getDataBySlug = async (categorySlug, limit, offset, result) => {
  console.log(
    "SELECT data_news_version_2_posts.title , data_news_version_2_posts.name , data_news_version_2_posts.id , data_news_version_2_posts.description, data_news_version_2_posts.thumb , data_news_version_2_posts.photo ,  data_news_version_2_posts.slugs , data_news_version_2_posts.photo_data , data_news_version_2_posts.categoryId , data_news_version_2_posts.created_at ,data_news_version_2_category.NAME AS nameCate FROM data_news_version_2_posts LEFT JOIN data_news_version_2_category ON data_news_version_2_posts.categoryId = data_news_version_2_category.id WHERE categoryId IN ( SELECT id FROM data_news_version_2_category WHERE slugs = '" +
      categorySlug +
      "' ) ORDER BY id DESC LIMIT " +
      offset +
      "," +
      limit
  );
  const [rows, fields] = await dbConnectMysql.promise().query(
    // "SELECT * , data_news_version_2_category.name as nameCate  from data_news_version_2_posts where categoryId IN (SELECT id from data_news_version_2_category INNER JOIN data_news_version_2_category where slugs = '"+categorySlug+"') limit "+offset+","+limit
    "SELECT data_news_version_2_posts.title , data_news_version_2_posts.name , data_news_version_2_posts.id , data_news_version_2_posts.description, data_news_version_2_posts.thumb , data_news_version_2_posts.photo , data_news_version_2_posts.slugs , data_news_version_2_posts.photo_data , data_news_version_2_posts.categoryId , data_news_version_2_posts.created_at ,data_news_version_2_category.NAME AS nameCate FROM data_news_version_2_posts LEFT JOIN data_news_version_2_category ON data_news_version_2_posts.categoryId = data_news_version_2_category.id WHERE categoryId IN ( SELECT id FROM data_news_version_2_category WHERE slugs = '" +
      categorySlug +
      "' ) ORDER BY id DESC LIMIT " +
      offset +
      "," +
      limit
  );
  return rows;
};

Post.getCountDataBySlug = async (categorySlug, result) => {
  console.log(
    "SELECT count(data_news_version_2_posts.id) FROM data_news_version_2_posts LEFT JOIN data_news_version_2_category ON data_news_version_2_posts.categoryId = data_news_version_2_category.id WHERE categoryId IN ( SELECT id FROM data_news_version_2_category WHERE slugs = '" +
      categorySlug +
      "' )"
  );
  const [rows, fields] = await dbConnectMysql
    .promise()
    .query(
      "SELECT count(data_news_version_2_posts.id) as countData FROM data_news_version_2_posts LEFT JOIN data_news_version_2_category ON data_news_version_2_posts.categoryId = data_news_version_2_category.id WHERE categoryId IN ( SELECT id FROM data_news_version_2_category WHERE slugs = '" +
        categorySlug +
        "' )"
    );
  return rows;
};

export default Post;

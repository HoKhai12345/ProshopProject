import asyncHandler from "express-async-handler";
import Post from "../../models/postModel.js";
import cheerio from "cheerio";
import constant from "../../config/constantCrawl.js";
import axios from "axios";
import postModel from "../../models/news/postModel.js";
// @desc    Fetch all Posts
// @route   GET /api/Posts
// @access  Public
const { sohaSocker, vnexpress } = constant();

const index = asyncHandler(async (req, res) => {
  const categoryId = req.params.categoryId;
  console.log("categoryId", typeof categoryId);
  if (!categoryId) {
    res.json({ err: 1, msg: "thiếu tham số " });
  }
  const limit = req.query.limit ? req.query.limit : 10;
  const offset = req.query.offset ? req.query.offset : 0;
  const keyword = req.query.keyword ? req.query.keyword : "";

     const data = await postModel.getListData(keyword, categoryId, limit, offset);

  res.json({
    err: 0,
    status: 1,
    data: data,
  });
});


const countPostCate = asyncHandler(async (req, res) => {
  const data = await postModel.getCountPostCate();
  res.json({
    err: 0,
    status: 1,
    data: data,
  });
});


const listNewsByCate = asyncHandler(async (req, res) => {
  console.log("req.params",req.params.categorySlugs);
  const categorySlug = req.params.categorySlugs;
  const limit = req.query.limit ? req.query.limit : 10;
  const offset = req.query.offset ? req.query.offset : 0;
  if(!categorySlug){
    res.json({
      err: 1,
      msg: "Invalid params",
    });
  }else{
    const data = await postModel.getDataBySlug(categorySlug , limit , offset);
    const count = await postModel.getCountDataBySlug(categorySlug);
    res.json({
      err: 0,
      status: 1,
      data: data,
      count: count
    });
  }
 
});




const newsDetail = asyncHandler(async (req, res) => {
  const slug = req.query.slug;
  console.log("slug",slug);

  if (!slug) {
    res.json({ err: 1, msg: "thiếu tham số " });
  }
  // const limit = req.query.limit ? req.query.limit : 10;
  // const offset = req.query.offset ? req.query.offset : 0;
  // const keyword = req.query.keyword ? req.query.keyword : "";
  const data = await postModel.getDataByUuId(slug);
 console.log("DAAAAAA",data);
 if(data.length>0){
  const dataRelated = await postModel.getDataRelaredByslug(slug,data[0].categoryId);
  const dataInThisCategory = await postModel.getDataInThisCateByslug(slug,data[0].categoryId);
  res.json({
    err: 0,
    status: 1,
    data: data,
    dataRelated:dataRelated,
    dataInThisCategory:dataInThisCategory
  });
 }else{
  res.json({
    err: 0,
    status: 1,
    data: [],
    dataRelated:[],
    dataInThisCategory:[]
  });
 }

});

const notApi = asyncHandler(async (req, res) => {
  res.status(201).json({
    err: 1,
    msg: "Invalid params",
  });
});
export { index, notApi , newsDetail ,countPostCate,listNewsByCate};

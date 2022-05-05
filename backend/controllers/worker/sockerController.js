
import asyncHandler from 'express-async-handler'
import Post from '../../models/postModel.js'
import cheerio from 'cheerio';
import constant from '../../config/constantCrawl.js'
import axios from 'axios'
import postModel from "../../models/news/postModel.js";
// @desc    Fetch all Posts
// @route   GET /api/Posts
// @access  Public
const {sohaSocker , vnexpress} = constant();

const index = asyncHandler(async (req, res) => {
 const categoryId = req.params.categoryId;
 console.log("categoryId",categoryId);
 if(!categoryId){
  res.json({"err":1,
            "msg": "thiếu tham số "
})

 }
 const limit = req.query.limit ? req.query.limit : 10
 const offset = req.query.offset ? req.query.offset : 0
 const keyword = req.query.keyword ? req.query.keyword : ""
 const data =  await postModel.getListData(keyword , categoryId , limit , offset , (err , data)=>{
  res.json({
    "err": 0,
    "status": 1,
    "data":data})
 });
//  console.log("data",data);

})

const notApi = asyncHandler(async(req , res)=>{
  
    res.status(201).json({
      "err":1,
      "msg":"Invalid params"
    })
  })
export {
  index,
  notApi
}

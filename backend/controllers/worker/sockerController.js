
import asyncHandler from 'express-async-handler'
import Post from '../../models/postModel.js'
import cheerio from 'cheerio';
import constant from '../../config/constantCrawl.js'
import axios from 'axios'
// @desc    Fetch all Posts
// @route   GET /api/Posts
// @access  Public
const {sohaSocker , vnexpress} = constant();

const index = asyncHandler(async (req, res) => {
    console.log("req",vnexpress);
    const data =  axios({
      url: sohaSocker.url,
      method: 'get'
    }).then((data)=>{
      const $ = cheerio.load(data); // load HTML
    }).catch((err)=>{
      console.log("err",err);
        return err
    })  
  res.json({"OK":""})
})

const getData =  ()=>{
    const data =  axios({
        url: sohaSocker.url,
        method: 'get'
      }).then((data)=>{
        //   console.log("data",data);
          return data
      }).catch((err)=>{
        console.log("err",err);
          return err
      })
}
export {
  index,
}

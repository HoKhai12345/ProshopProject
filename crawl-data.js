import cheerio from "cheerio";
import axios from "axios";

const URL_CRAWL = "https://www.24h.com.vn/bong-da-c48.html";

fetchData(URL_CRAWL).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html); 
    let data = []
    $('article[class^="cate-24h-foot"]').each((index, el) => {
      const itemNew = $(el).find('figure > a');
      const pageDetailUrl = itemNew.attr('href');
      let videoUrl = itemNew.attr('data-urlgifvideo');
      let imageUrl = itemNew.attr('data-urlimg'); 
      if (!videoUrl || !imageUrl) {
          imageUrl = '';
          videoUrl = '';
          const url = itemNew.find('img').attr('data-original');
          if (url) {
            if (url.indexOf('.jpg') >= 0) {
                imageUrl = url;
            }
            if (url.indexOf('.gif') >= 0) {
                videoUrl = url;
            }
          }
      }
      const title = itemNew.attr('title');
      const regexFindId = /\-[^\-]*.html/;
      //get id of new
      const id = pageDetailUrl.match(regexFindId)[0].replace(/(\-)|(.html)/g, '');
      //check new is added in list data
      const dataContainId = data.find(item => item.id && item.id === id)
      if(!dataContainId || dataContainId.length === 0) {
        data.push({
            id, pageDetailUrl, videoUrl, imageUrl, title
        });
      }
    });
    console.log(data.length)
})

async function fetchData(url){
    let response = await axios(url).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}


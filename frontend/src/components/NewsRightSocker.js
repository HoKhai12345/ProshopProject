import React from "react";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import Rating from "./Rating";


let trimString = function (string, length) {
    return string.length > length ? 
           string.substring(0, length) + '...' :
           string;
  };
const NewsRightSocker = ({ newsRight }) => {
  return (
    <>
      {newsRight &&
        newsRight.map((newsRight) => {
          return (
            <div class="col-md-6">
              <div class="tn-img">
                <img src={"http://evideo.vn/cms/"+newsRight.thumb} />
                <div class="tn-title">
                <Link to={"/"+newsRight.slugs+".html"}>
                <a style={{fontSize:15}} >{trimString(newsRight.title, 40)}</a>  
                 </Link>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default NewsRightSocker;

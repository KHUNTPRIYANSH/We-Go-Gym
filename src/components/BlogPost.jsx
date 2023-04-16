import React from "react";

const BlogPost = (props) => {
  return (
    <div id="Bpost">
      <div id="B-img">
        <img src={props.blogDp} alt="" />
      </div>
      <div id="B-data">
        <div id="B-title">{props.Btitle}</div>
        <div id="B-time">{props.Btime}</div>
        <div id="B-desc">{props.Bdesc}</div>
      </div>
    </div>
  );
};

export default BlogPost;

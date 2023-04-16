import React from "react";
import "../../styles/BlogPost.css";
import BlogPost from "../../components/BlogPost";
import Gal from "../../components/Gal";
import SecHead from "../../components/SecHead";
const Blog = () => {
  return (
    <>
      <SecHead
        title="Blog / Stories"
        desc="
A huge number of people across the world resolve to improve their health and fitness. For some this means losing weight, for others it’s gaining muscle, it’s more about working on developing a healthy mindset. Transforming your physique doesn’t happen overnight."
      />
      <div className="blog-container">
        <BlogPost
          blogDp="./imgs/bl1.webp"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
        <BlogPost
          blogDp="./imgs/bl2.webp"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
        <BlogPost
          blogDp="./imgs/bl3.webp"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
        <BlogPost
          blogDp="./imgs/bl4.webp"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
        <BlogPost
          blogDp="./imgs/bl5.jpg"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
        <BlogPost
          blogDp="./imgs/bl6.webp"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
        <BlogPost
          blogDp="./imgs/bl7.webp"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
        <BlogPost
          blogDp="./imgs/bl8.jpg"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
        <BlogPost
          blogDp="./imgs/bl9.webp"
          Btitle="Can you build muscle with smaller weights?"
          Btime="
        
        FEBRUARY 15, 2021
        "
          Bdesc="
        
        It can be hard to work out with so many distractions and difficulties keeping us from the gym. When we are able to work out,
        "
        />
      </div>
      <Gal />
    </>
  );
};

export default Blog;

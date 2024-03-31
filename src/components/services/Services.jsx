import { useRef } from "react";
import React from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const openLinkInNewTab = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I strive to help you grow your social media presence
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Video Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button onClick={() => openLinkInNewTab('https://www.fiverr.com/users/yashkrana/seller_dashboard')}>Services I Offer</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Sports videos</h2>
          <p>
          Offering expertise in editing sports highlights and mixtapes for your social media platforms or personal use. Including Sound Design, speed ramps, b-rolls and much more
          </p>
          <button onClick={() => openLinkInNewTab('https://www.fiverr.com/yashkrana/edit-engaging-videos-and-posts-for-youtube-instagram-and-facebook')}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Short Films and Trailers</h2>
          <p>
          Providing professional services in the editing of short films, including color grading, sound design, and a wide array of additional capabilities that will elevate the final product.
          </p>
          <button onClick={() => openLinkInNewTab('https://www.fiverr.com/yashkrana/edit-your-instagram-reels-and-posts-youtube-videos')}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Music and Anime Videos</h2>
          <p>
          Assist you with editing and enhancing the visual and auditory components of your music video. This includes special effects, color correction, visual enhancements, audio synchronization, and more to elevate the overall quality of your music video.
          </p>
          <button onClick={() => openLinkInNewTab('https://www.fiverr.com/yashkrana/edit-your-youtube-and-instagram-reels-stories-igtv-and-posts')}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

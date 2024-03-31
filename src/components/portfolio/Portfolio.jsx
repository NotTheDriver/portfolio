import { useRef } from "react";
import React from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Music Promo for Charity Concert",
    img: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg",
    desc: "",
    src:"youtube.com",
  },
  {
    id: 2,
    title: "NBA Highlight Videos",
    img: "https://cdn.vox-cdn.com/thumbor/RrdjnKHLu4gCmc0EJJXEfEL1850=/1360x0:8477x5651/920x613/filters:focal(3517x1239:4873x2595):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73010572/1249091302.0.jpg",
    desc: "Worked on a wide array of NBA highlights, mixtapes and edits for Instagram",
    src:"https://youtube.com/video/RWucpVWqga4/edit",
  },
  {
    id: 3,
    title: "Actors Show Reels",
    img: "https://images.pexels.com/photos/6895808/pexels-photo-6895808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "",
    src:"youtube.com",
  },
  {
    id: 4,
    title: "Short Movies and Trailers",
    img: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "",
    src:"youtube.com",
  },
];

const Single = ({ item }) => {
  const openLinkInNewTab = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => openLinkInNewTab(item.src)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

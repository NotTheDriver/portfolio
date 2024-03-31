import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const openLinkInNewTab = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="#" onClick={() => openLinkInNewTab('https://www.instagram.com/cinevidyaa/')}>
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#" onClick={() => openLinkInNewTab('https://www.youtube.com/channel/UC33hjdFSHoBQmIKHM6dwfqQ')}>
            <img src="/youtube.png" alt="" onClick={() => openLinkInNewTab('https://website1.com')}/>
          </a>
          <a href="#" onClick={() => openLinkInNewTab('https://www.fiverr.com/users/yashkrana/seller_dashboard')}>
            <img className="fiverr" src="/fiverr.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

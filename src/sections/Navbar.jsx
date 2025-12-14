import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="https://drive.google.com/file/d/1kmpP36bkBZNk9IPmRDAKaZkNd2ojdKDZ/view?usp=drive_link" className="nav-link">
          Resume
        </a>
      </li>
      <li className="nav-li">
        <a href="https://github.com/Shashank-Script" className="nav-link">
          Github
        </a>
      </li>
      <li className="nav-li">
        <a href="https://leetcode.com/u/Shashank-02/" className="nav-link">
          LeetCode
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-20 w-full inset-x-0 backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Shashank
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="menu"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

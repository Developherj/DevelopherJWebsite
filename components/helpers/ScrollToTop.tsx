"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScroolToTop = () => {
  const [isVisible, setIsVisiblie] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisiblie(true);
      } else setIsVisiblie(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 animate-pulse right-4 ">
      {isVisible && (
        <button
          className="bg-[var(--dj-pink)] text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScroolToTop;

"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "sytem" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 transition"
    >
      {currentTheme === "dark" ? (
        <BiSun className="text-[#1c2051] w-8 h-8 cursor-pointer" />
      ) : (
        <BiMoon className="text-[#1c2051] w-8 h-8 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggle;

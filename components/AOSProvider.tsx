"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return null; // This component doesn't render anything, just initializes AOS
}

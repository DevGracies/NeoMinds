"use client";

import Link from "next/link";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">NeoMinds</div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul className={`navLinks ${menuOpen ? "active" : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About Us</Link>
        </li>
        <li>
          <Link href="/enroll">Enroll</Link>
        </li>
        <li>
          <Link href="/SchoolPage">NeoMinds for Schools</Link>
        </li>
      </ul>
    </nav>
  );
}

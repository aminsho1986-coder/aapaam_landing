"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';
import "./nav.scss";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const pathname = usePathname()

  let onBurgerMenuClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  let closeNav = () => {
    document.querySelector(".nav .hamburger").classList.remove("active");
    document.querySelector(".nav .menu-box").classList.remove("active");
  };
  useEffect(() => {
    document.querySelector(".nav .hamburger").classList.toggle("active");
    document.querySelector(".nav .menu-box").classList.toggle("active");  
  }, [isNavOpen]);

  // ==========================ANIMATION ON SCROLL PAGE==================
  const [sections, setSections] = useState([]);
  const [sectionPoint] = useState(150);
  let reveal = () => {
    for (let i = 0; i < sections.length; i++) {
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
      let sectionTop = sections[i].getBoundingClientRect().top;
      if (sectionTop < windowHeight - sectionPoint) {
        sections[i].classList.add("active");
      } else {
        sections[i].classList.remove("active");
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", reveal);
  }

  useEffect(() => {
    closeNav();
    setSections(document.querySelectorAll(".body-container"));
    reveal();
  }, []);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeNav();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const changeNavbarColor = () => {
    if(typeof window !== "undefined"){
      if (window.scrollY >= 90) {
        setColorchange(true);
      }
      else {
        setColorchange(false);
      }
    }
  };
  if(typeof window !== "undefined")
    window.addEventListener('scroll', changeNavbarColor);


  return (
    <nav ref={wrapperRef} className={!colorChange && pathname === "/" ? "nav" : "nav navChange"}  >
      <div className="nav-container">
        <div className="nav-left">
          <Link href="/">
            <Image
              src={"/images/main/top-logo.svg"}
              alt=""
              width="130"
              height="130"
            />
          </Link>
        </div>
        <div className="nav-center">
          <Link href="/" className={pathname === "/" ? "activeNav" : ""}> خانه </Link>
          <Link href="/projects" className={pathname.includes("/projects") ? "activeNav" : ""}> پروژه ها </Link>
          <Link href="/resources" className={pathname === "/resources" ? "activeNav" : ""}> امکانات</Link>
          <Link href="/about" className={pathname === "/about" ? "activeNav" : ""}> درباره ما </Link>
          <Link href="/mag" className={pathname === "/mag" ? "activeNav" : ""}> اخبار </Link>
        </div>
        <div className="nav-right">
          <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`}>
            <button className="nav-blue-light-button"> ورود به داشبورد</button>
          </Link>
        </div>
        <div className="burger-menu" onClick={() => {onBurgerMenuClick(); typeof window !== "undefined" ? window.scrollY <= 90 ? setColorchange(!colorChange) : null : null }}>
          <label className="hamburger">
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        <div className="menu-box">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/projects">پروژه ها</Link>
            </li>
            <li>
              <Link href="/resources">امکانات</Link>
            </li>
            <li>
              <Link href="/about">درباره</Link>
            </li>
            <li>
              <Link href="/mag">اخبار</Link>
            </li>
            <li>
              <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`}>
                <button className="nav-blue-light-button"> ورود به داشبورد</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

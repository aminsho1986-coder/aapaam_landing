"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import Nav from "../shared/nav/Nav";
import Companies from "../shared/companies/Companies";

import styles from "./about.module.scss";
import "./about.scss";
import Footer from "../shared/footer/Footer";
import Help from "../shared/help/Help";


export default function About() {
  const [headerData] = useState([
    {
      title: "داستان ما",
      text: "آپام یا آپام نبات ایزدبانوی نگهبان آب‌ها، از اساطیر ایران باستان میباشد که نامش در اوستا آمده و او را به عنوان سرچشمه آب‌های زمین ستایش کرده‌اند. آپام اسبی تیزرو دارد که با آن در اقیانوس ابدی فراخ‌کرت به دنبال فر ایزدی است.",
    },
    {
      title: "چشم انداز",
      text: "آپام برای آینده ی پنجاه ساله، سیاره ای را در دسترس میداند که ارزش زیست یک اولویت جدی تلقی میشود و ضرورت تعادل ماده و انرژی در اکوسیستم ها به درستی توسط جامعه و دولت درک می شود. ما با ادغام  ضرورت این تعادل و نیاز آینده ی زمین، به دنبال رسوب دادن کربن در حجم وسیع و قابل شمارش هستیم."
    },
    {
      title: "ماموریت",
      text: "آپام برای رسیدن به وضعیت پایداری کره ی زمین عمیقا تلاش میکند با استفاده از روش ها و تکنولوژی های جذب کربن به روز و دارای اثربخشی چند جانبه،بتواند اعتبار کربن با کیفیت را به صورت قابل اندازه گیری و قابل ردیابی برای پروژه های با ارزش زیستی-انسانی تولید و عرضه کند.",
    },
  ]);
  const [storyData] = useState([
    {
      title: "1399",
      text: "تحقیق و توسعه کسب و کار و تیم سازی",
    },
    {
      title: "1400",
      text: "شروع پروژه‌های جبران کربن",
    },
    {
      title: "1401",
      text: " راه‌اندازی سرویس ارزیابی ردپای کربن کسب و کارها",
    },
    {
      title: "1402",
      text: "راه‌اندازی سرویس نت‌زیرو و توسعه وب سرویس آپام",
    },
  ]);
  const [teamData] = useState([
    {
      id: 1,
      img: "/images/about/member1.png",
      text: "من جان هستم و در زمینه طراحی در آپام کار می کنم. کار من کمک به زمین بوسیله ی ......",
    },
    {
      id: 2,
      img: "/images/about/member1.png",
      text: "من جان هستم و در زمینه طراحی در آپام کار می کنم. کار من کمک به زمین بوسیله ی ......",
    },
    {
      id: 3,
      img: "/images/about/member1.png",
      text: "من جان هستم و در زمینه طراحی در آپام کار می کنم. کار من کمک به زمین بوسیله ی ......" ,
    },
   
  ]);
  const [trustData] = useState([
    { id: 1, img: "/images/about/trust1.png" },
    { id: 2, img: "/images/about/trust1.png" },
    { id: 3, img: "/images/about/trust1.png" },
    { id: 4, img: "/images/about/trust1.png" },
    { id: 5, img: "/images/about/trust1.png" },
    { id: 6, img: "/images/about/trust1.png" },
    { id: 7, img: "/images/about/trust1.png" },
    { id: 8, img: "/images/about/trust1.png" },
    { id: 9, img: "/images/about/trust1.png" },
  ]);
  const [slides, setSlides] = useState(3);
  const [slideWidth, setSlideWidth] = useState(570);

  const trustWrapper = useRef(null);
  useInitializeSlides(trustWrapper);

  function useInitializeSlides(ref) {
    useEffect(() => {
      if (ref.current) {
        if (slideWidth < 500) {
          setSlides((ref.current.offsetWidth - 16) / (slideWidth + 5) - 0.01);
        } else {
          setSlides((ref.current.offsetWidth - 32) / (slideWidth + 5) - 0.01);
        }
      }
    }, [ref, slideWidth]);
  }

  const trustItemWrapper = useRef(null);
  useInitializeSlideItem(trustItemWrapper);

  function useInitializeSlideItem(ref) {
    useEffect(() => {
      if (ref.current) {
        setSlideWidth(ref.current.offsetWidth);
      }
    }, [ref]);
  }
  return (
    <>
      <Nav />
      {/* ====================START HEADER========================== */}
      <AboutHeader headerData={headerData} />
      {/* ====================END HEADER==========================  */}
      {/* ====================START STORY SECTION========================== */}
      <AboutStory storyData={storyData} />
      {/* ====================END STORY SECTION==========================  */}
      {/* ====================SATART TEAM SECTION==========================  */}
        {/* <AboutTeam teamData={teamData} /> */}
      {/* ====================END TEAM SECTION==========================  */}
      {/*  ====================START COMPANIES SECTION========================== */}
      <Companies />
      {/* ====================END COMPANIES SECTION========================== */}
      {/* ====================START TRUST SECTION========================== */}
      {/* <section className={`${styles.trust} trust body-container`}>
        <span className={`${styles.sectionTitle} section-title`}>
        قراردادها و همکاری‌ها
        </span>
        <div ref={trustWrapper} className={styles.imgRow}>
          <Swiper
            slidesPerView={slides}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className={styles.swiperTrust}
          >
            {trustData.map((trustItem) => {
              return (
                <SwiperSlide
                  ref={trustItemWrapper}
                  key={trustItem.id}
                  className={styles.sliderSlide}
                >
                  <Image src={trustItem.img} alt="" width="300" height="220" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section> */}
      {/* ====================END TRUST SECTION========================== */}
      <Help />
      {/* ====================START END OF PAGE SECTION========================== */}
      <section className={`${styles.bottomGreen} body-container`}>
        <span className={`${styles.sectionTitle} section-title`}>
        اکنون برای محافظت از زمین، می‌توانید به جامعه جبران‌کنندگان کربن بپیوندید!
        </span>
        <div className={styles.buttonRow}>
          <Link href="/individual">
            <button className="white-button-light-blue-text">
            برای اشخاص
            </button>
          </Link>
          <Link href="/company">
            <button className="white-button-light-blue-text">
            برای شرکت ها
            </button>
          </Link>
          <Link href="/event">
            <button className="white-button-light-blue-text">
              برای رویداد ها
            </button>
          </Link>
        </div>
      </section>
      {/* ====================END OF PAGE========================== */}

      <Footer />
    </>
  );
}

const AboutHeader = ({ headerData }) => {
  return (
    <header className={`${styles.header} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
        ما کی هستیم؟
      </span>
      <div className={styles.headerItemRow}>
        {headerData.map((item) => {
          return (
            <div className={styles.headerItem} key={item.title}>
              <span>{item.title}</span>
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
};

const AboutStory = ({ storyData }) => {
  return (
    <section className={`${styles.story} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}> تاریخچه  </span>
      <div className={styles.storyRow}>
        {storyData.map((item) => {
          return (
            <div className={styles.storyItem} key={item.title}>
              <span>{item.title}</span>
              <span>{item.text}</span>
              <Image
                src={"/images/shared/four-blue-tree.png"}
                alt=""
                width="175"
                height="65"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const AboutTeam = ({ teamData }) => {
  return (
    <section className={`${styles.team} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
        تیم ما
      </span>
      {teamData.map((item) => {
        return (
          <div className={styles.teamItem} key={item.id}>
            <Image src={item.img} alt="" width="248" height="248" />
            <span>{item.text}</span>
          </div>
        );
      })}
    </section>
  );
};

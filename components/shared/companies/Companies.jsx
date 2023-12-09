"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import "./companies.scss";
import Image from "next/image";

export default function Companies() {
  const [companiesData] = useState([
    // { id: 1, img: "/images/shared/company1.png" },
    { id: 2, img: "/images/shared/company2.png" },
    { id: 3, img: "/images/shared/company3.png" },
    { id: 4, img: "/images/shared/company4.png" },
    { id: 5, img: "/images/shared/company5.png" },
    { id: 6, img: "/images/shared/company6.png" },
    { id: 7, img: "/images/shared/company7.png" },
    { id: 8, img: "/images/shared/company8.png" },
    { id: 9, img: "/images/shared/company9.png" },
    { id: 9, img: "/images/shared/company10.png" },
    { id: 9, img: "/images/shared/company11.png" },
    { id: 9, img: "/images/shared/company12.png" },
    { id: 9, img: "/images/shared/company13.png" },
    { id: 9, img: "/images/shared/company14.png" },
  ]);
  const [slides, setSlides] = useState(3);

  const companiesWrapper = useRef(null);
  useInitializeSlides(companiesWrapper);

  function useInitializeSlides(ref) {
    useEffect(() => {
      if (ref.current) {
        setSlides(ref.current.offsetWidth / 180 - 0.05);
      }
    }, [ref]);
  }

  return (
    <section className="companies body-container" style={{backgroundColor:"#f1f1f1",margin:"2rem 0",padding:"2rem 0"}}>
      <span className="section-title">ده ها کسب‌ و کار در این مسیر با ما همراه هستند، شما هم به ما بپیوندید!</span>
      <div ref={companiesWrapper} className="bottom-companies">
        <Swiper
          slidesPerView={slides}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {companiesData.map((companyImg) => {
            return (
              <SwiperSlide key={companyImg.id}>
                <Image src={companyImg.img} alt="" width="150" height="150" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

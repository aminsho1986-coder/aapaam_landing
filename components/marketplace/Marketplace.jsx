"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Nav from "../shared/nav/Nav";
import Footer from "../shared/footer/Footer";
import BottomGray from "../shared/bottom-gray/BottomGray";
import { useRouter } from "next/navigation";
import styles from "./marketplace.module.scss";
import "./marketplace.scss";


export default function Marketplace() {
  const [detailData] = useState([
    {
      title: "استفاده از API",
      subtitle: "سرویس API ما چیست؟",
      description:
        "اگر شما یک فروشگاه آنلاین، و یا پلتفرم ارائه دهنده حمل و نقل و یا ارسال بار اینترنتی هستید، با این کلید API میتوانید امکان خرید خدمات و محصولات کربن صفر را در اختیار مشتریان خود بگذارید. برای استفاده از این سرویس لازم است ردپای کربن سالانه کسب و کارتان را در محدوده یک و دو ارزیابی و جبران کنید.",
      button: "استفاده از API",
      isBlue: true,
      mainImg: "/images/marketplace/api.JPG",
    },
    {
      title: "گرفتن نماد در قالب کد HTML",
      subtitle: "چطور از نماد آپام در وب سایت خود استفاده کنید؟",
      description:
        "اگر در برنامه های آپام مشارکت کرده اید و ردپای کربن خود را جبران کرده اید، میتوانید نماد کسب و کار سبز را به دو صورت  “نماد کربن صفر “و یا “نماد نت زرو” در وبسایت خود را در قالب کدHTML زیر درج نمایید. با نشان دادن این نماد مشتریان شما از ارزش مسئولیت محیط زیستی در کسب و کار شما آگاه میشوند.",
      button: "دریافت HTML Code",
      isBlue: false,
      mainImg: "/images/marketplace/badge.JPG",
    },
    {
      title: "استفاده از QR Code",
      subtitle: "چطور از جزییات جبران ردپای خود در قالب QR Code استفاده کنید",
      description:
        "اگر شما علاقه مند به ارائه محصولات کربن صفر به مشتریانتان هستید، با ارائه QR code برای هر گروه محصولتان میتوانید امکان خرید سبز را در اختیار مشتریان خود بگذارید. برای استفاده از این سرویس لازم است ردپای کربن سالانه کسب و کارتان را در محدوده یک و دو ارزیابی و جبران کنید. QR code درج شده حاوی اطلاعات رد پای کربن و نحوه ی جبران رد پای کربن آن محصول میباشد.",
      button: "دریافت QR Code",
      isBlue: true,
      mainImg: "/images/marketplace/qrcode.JPG",
    },
  ]);

  const router = useRouter();

  let onGetApiClick = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/certification`);
  };
  let onGetCodeClick = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/certification`);
  };
  return (
    <>
      <Nav />
      {/* <!-- ==========================START HEADER========================= --> */}
      <MarketplaceHeader
        onGetApiClick={onGetApiClick}
        onGetCodeClick={onGetCodeClick}
      />
      {/* <!-- ==========================END HEADER========================= --> */}
      {/* <!-- ==========================START ROUND IMAGE SECTION========================= --> */}
      <MarketplaceRoundImages />
      {/* <!-- ==========================END ROUND IMAGE SECTION========================= --> */}
      {/* <!-- ==========================START DETAIL SECTION========================= --> */}
      <MarketplaceDetail data={detailData} />
      {/* <!-- ==========================END DETAIL SECTION========================= --> */}
      {/* <!-- ==========================START GRAY SECTION========================= --> */}
      <BottomGray />
      {/* <!-- ==========================END GRAY SECTION========================= --> */}
      {/* <!-- ==========================START FOOTER========================= --> */}
      <Footer />
      {/* <!-- ==========================END FOOTER========================= --> */}
    </>
  );
}

const MarketplaceHeader = ({ onGetApiClick, onGetCodeClick }) => {
  return (
    <header className={`${styles.header} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
      آیا شما یک بازار، کسب و کار دیجیتال یا پلتفرم حمل و نقل دیجیتال هستید؟  
      </span>
      <Image
        src="/images/marketplace/resources.png"
        alt=""
        width="820"
        height="580"
      />
      <div className={styles.buttonContainer}>
        <button className="blue-light-button" onClick={onGetApiClick}>
          سرویس API
        </button>
        <button className="green-button" onClick={onGetCodeClick}>
          کد HTML خود را دریافت کنید
        </button>
      </div>
    </header>
  );
};

const MarketplaceRoundImages = () => {
  return (
    <section className={`${styles.roundImg} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
        آپام چکار میکند؟
      </span>
      <div className={styles.imgRow}>
        <div className={styles.sectionItem}>
          <Image
            src="/images/marketplace/item1.PNG"
            alt=""
            width="200"
            height="200"
          />
          <span className={styles.description}>
          مسیر نت زیرو
          </span>
          <span className={styles.description}>
          ترسیم مسیر در راه دستیابی به هدف کربن خنثی
          </span>
        </div>
        <div className={styles.sectionItem}>
          <Image
            src="/images/marketplace/item2.PNG"
            alt=""
            width="200"
            height="200"
          />
          <span className={styles.description}>
          ارزیابی کربن
          </span>
          <span className={styles.description}>
          ارزیابی و محاسبه ردپای کربنی فعالیت‌های شما
          </span>
        </div>
        <div className={styles.sectionItem}>
          <Image
            src="/images/marketplace/item3.PNG"
            alt=""
            width="180"
            height="180"
          />
          <span className={styles.description}> 
          پروژه‌های جبران کربن 
          </span>
          <span className={styles.description}> 
          همراهی در مسیر تعادل‌بخشی انتشار کربن شما
          </span>
        </div>
      </div>
    </section>
  );
};

const MarketplaceDetail = ({ data }) => {
  return (
    <section className={`${styles.details} body-container`}>
      {data.map((item) => {
        return (
          <div className={styles.detailItem} key={item.title}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.mainImg}
                src={item.mainImg}
                alt=""
                width="580"
                height="370"
              />
            </div>
            <div className={styles.textContainer}>
              <span className={`${styles.sectionBlueTitle} section-blue-title`}>
                {item.title}
              </span>
              <span className={styles.sectionDescription}>{item.subtitle}</span>
              <span className={styles.description}>{item.description}</span>
              <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/certification`}>
                {item.isBlue && (
                  <button className="blue-light-button">{item.button}</button>
                )}
                {!item.isBlue && (
                  <button className="blue-light-button">{item.button}</button>
                )}
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

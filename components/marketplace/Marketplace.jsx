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
        "با استفاده از کلید API می‌توانید به صورت یکپارچه محاسبه کربن را در پلتفرم داشته باشید، و همچنین تعامل با مخاطبین خود را از طریق سرویس API ما دورباره بازتعریف کنید.",
      button: "استفاده از API",
      isBlue: true,
      mainImg: "/images/company/question-img1.webp",
    },
    {
      title: "گرفتن نماد در قالب کد html",
      subtitle: "چطور از نماد آپام در وب سایت خود استفاده کنید؟",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      button: "دریافت html Code",
      isBlue: false,
      mainImg: "/images/company/question-img1.webp",
    },
    {
      title: "استفاده از QR Code",
      subtitle: "چطور از جزییات جبران ردپای خود در قالب QR Code استفاده کنید",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      button: "دریافت QR Code",
      isBlue: true,
      mainImg: "/images/company/question-img1.webp",
    },
  ]);

  const router = useRouter();

  let onGetApiClick = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`);
  };
  let onGetCodeClick = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`);
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
        src="/images/individual/header.png"
        alt=""
        width="1080"
        height="495"
      />
      <div className={styles.buttonContainer}>
        <button className="blue-light-button" onClick={onGetApiClick}>
          از API استفاده کنید
        </button>
        <button className="green-button" onClick={onGetCodeClick}>
          کد را بگیرید
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
            src="/images/marketplace/item1.png"
            alt=""
            width="300"
            height="300"
          />
          <span className={styles.description}>
          سفر نت زیرو
          </span>
          <span className={styles.description}>
          ترسیم مسیر در راه دستیابی به کربن خنثی
          </span>
        </div>
        <div className={styles.sectionItem}>
          <Image
            src="/images/marketplace/item2.png"
            alt=""
            width="300"
            height="300"
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
            src="/images/marketplace/item3.png"
            alt=""
            width="300"
            height="300"
          />
          <span className={styles.description}> 
          پروژه‌های جبران کربن 
          </span>
          <span className={styles.description}> 
          همراهی در مسیر تعادلبخشی انتشار کربن شما
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
              <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`}>
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

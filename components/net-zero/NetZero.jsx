"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Nav from "../shared/nav/Nav";
import Steps from "../shared/steps/Steps";
import Help from "../shared/help/Help";
import Footer from "../shared/footer/Footer";

import stylePrice from "@/hooks/stylePrice";

import styles from "./netZero.module.scss";
import "./netZero.scss";

export default function NetZero({ serverStatus, serverData }) {

  const router = useRouter();
  const [stepsData] = useState({
    title: "مراحل سالانه سفر کربن صفر",
    subtitle: "",
    stepsData: [
      {
        id: "1",
        img: "/images/netZero/step3.png",
        imgWidth: 110,
        imgHeight: 90,
        firstString: "انتخاب برنامه",
        secondString: "و هدف‌گذاری",
        onClick: function () {
          onGoToPlansClick();
        },
      },
      {
        id: "2",
        img: "/images/main/step1.png",
        imgWidth: 80,
        imgHeight: 100,
        firstString: "محاسبه",
        secondString: "رد پای سالانه",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`);
        },
      },
      {
        id: "3",
        img: "/images/main/step2.svg",
        imgWidth: 100,
        imgHeight: 100,
        firstString: "انتخاب ",
        secondString: "پروژه جبران",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`);
        },
      },
      {
        id: "4",
        img: "/images/netZero/step4.svg",
        imgWidth: 110,
        imgHeight: 100,
        firstString: "نظارت بر اهداف ",
        secondString: "انتشار آینده",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`);
        },
      },
    ],
  });
  const [questionData] = useState([
    {
      title: "بسته سفر کربن صفر 2030 و 2050 چیست؟",
      description:
        "سفر کربن صفر 2030 نقشه‌راهی است برای کاهش تدریجی انتشار گازهای گلخانه‌ای همراه با گزارش خوداظهاری در راستای شفافیت در این مسیر؛ و سفر کربن صفر 2050 با هدف بلند مدت کربن خنثی کامل در این سه دهه پیش‌روی می‌باشد.",
      mainImg: "/images/company/question-img1.webp",
    },
    {
      title: "چگونه می‌توانید ردپای سالانه خود را محاسبه کنید؟",
      description:
        "محاسبه ردپای سالانه شما با استفاده از سرویس تحت‌ وب ما بسیار آسان است!  با انتخاب برنامه مناسب کسب و کارخود، داده‌ها را وارد کنید و طبق دستورالعمل ما پیش‌ روید و از دیدگاه ما درباره تاثیرات زیست محیطی خود کمک بگیرید.",
      mainImg: "/images/company/question-img1.webp",
    },
    {
      title: "چه عواملی بر هزینه‌ و کیفیت پروژه جبرانی شما پس از ارزیابی تأثیر می گذارد؟",
      description:
        "هزینه‌ها و کیفیت پروژه جبرانی به عواملی مانند نوع پروژه، مکان، مقیاس، روش و پویایی بازار بستگی دارد؛ از این روی ما در کنار شما برای انتخاب پایدار و مقرون به صرفه در جهت آینده‌ای سبز‌تر قدم بردارید.",
      mainImg: "/images/company/question-img1.webp",
    },
  ]);

  const plansElement = useRef(null);

  let [isFirstLoad, setIsFirstLoad] = useState(true);
  let getPlansElement = (element) => {
    plansElement.current = element;
    setIsFirstLoad(false);
  };

  let onGoToPlansClick = () => {
    if(typeof window !== "undefined")
      window.scrollTo(
        0,
        plansElement.current.getBoundingClientRect().top + window.scrollY
      );
  };

  return (
    <>
      <Nav />
      {/* <!-- ==========================START HEADER===================== --> */}
      <NetZeroHeader onGoToPlansClick={onGoToPlansClick} />
      {/* <!-- ==========================END HEADER===================== -->  */}
      {/* <!-- ==========================START STEPS SECTION===================== --> */}
      <Steps data={stepsData} />
      {/* <!-- ==========================END STEPS SECTION===================== --> */}
      {/* <!-- ==========================START QUESTION SECTION===================== --> */}
      <NetZeroQuestions data={questionData} />
      {/* <!-- ==========================END QUESTION SECTION===================== --> */}
      {/* <!-- ==========================START COMPANIES SECTION===================== --> */}
        {/* <Companies /> */}
      {/* <!-- ==========================END COMPANIES SECTION===================== --> */}
      {/* <!-- ==========================START PLAN SECTION===================== --> */}
      <NetZeroPlans
        data={serverData}
        onFirstLoad={getPlansElement}
        isFirstLoad={isFirstLoad}
      />
      {/* <!-- ==========================END PLAN SECTION===================== --> */}
      {/* <!-- ==========================START HELP SECTION===================== --> */}
      <Help />
      {/* <!-- ==========================END HELP SECTION===================== --> */}
      {/* <!-- ==========================START FOOTER===================== --> */}
      <Footer />
      {/* <!-- ==========================END FOOTER===================== --> */}
    </>
  );
}

const NetZeroHeader = ({ onGoToPlansClick }) => {
  const opts = {
    height: "532",
    width: "1100",
    playerVars: {
      autoplay: 0,
    },
  };
  // let _onReady = (event) => {
  //   event.target.pauseVideo();
  // };
  return (
    <header className={`${styles.header} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
      سفر کربن صفر چیست؟
      </span>
      <span className={`${styles.sectionDescription} section-description`}>
      می توانید میزان انتشار کربن خود را با آپام محاسبه و جبران کنید
      </span>
      <div className={`${styles.videoContainer} d-flex justify-content-center`}>
        <video 
          controls
          width="920"  
          height="532"  
        >
          <source type="video/mp4" src="/videos/netzero.mp4"/>
        </video>
      </div>
      <div onClick={onGoToPlansClick}>
        <button className={`${styles.greenButton} green-button`}>
          شروع سفر
        </button>
      </div>
    </header>
  );
};

const NetZeroQuestions = ({ data }) => {
  return (
    <section className={`${styles.questions} body-container`}>
      {data.map((item) => {
        return (
          <div className={styles.questionItem} key={item.title}>
            <div className={styles.textContainer}>
              <span className={`${styles.sectionBlueTitle} section-blue-title`}>
                {item.title}
              </span>
              <span className={styles.description}>{item.description}</span>
              <div className={styles.buttonContainer}>
                <button className="blue-light-button">
                  <span>دانلود pdf</span>
                  <Image
                    src="/images/shared/download.png"
                    alt=""
                    width="31"
                    height="31"
                  />
                </button>
              </div>
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.mainImg}
                src={item.mainImg}
                alt=""
                width="585"
                height="370"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

const NetZeroPlans = ({ data, onFirstLoad, isFirstLoad }) => {
  const plansRef = useRef();
  useEffect(() => {
    if (isFirstLoad) {
      onFirstLoad(plansRef.current);
    }
  }, [isFirstLoad]);
  return (
    <section className={`${styles.netZeroPlans} body-container`} ref={plansRef}>
      <span className={`${styles.sectionTitle} section-title`}>
        تا سال 2030
      </span>
      <span className={`${styles.sectionDescription} section-description`}>
      برنامه‌های سفر کربن صفر 
      </span>
      <div className="container-fluid">
        <div className="row">
        {data.map((item) => {
          return (
            item.netZeroYear === "2030" ? 
            <div className="col-md-3">
              <div className={styles.planItem} key={item.title}>
                <div className={styles.topTexts}>
                  <span className={styles.title}>{item.title}</span>
                  {/* <span className={styles.value}>
                    {stylePrice(item.price.toString())} <small style={{fontSize:"12px",paddingRight:"5px"}}> میلیون تومان </small>
                  </span> */}
                </div>
                <div className={styles.line}></div>

                <div className={styles.firstOffset}>
                  <Image
                      src="/images/netZero/benefit-item-img.png"
                      alt=""
                      width="30"
                      height="18"
                      />
                  <span> شروع با : {item.firstOffset}% جبران </span>
                </div>
                
                {item.benefits.map((benefitItem) => {
                  return (
                    <div className={styles.benefitItem} key={benefitItem}>
                      <Image
                        src="/images/netZero/benefit-item-img.png"
                        alt=""
                        width="30"
                        height="18"
                      />
                      <span>{benefitItem}</span>
                    </div>
                  );
                })}
                <div style={{position:"absolute" , bottom:"30px"}}>
                  <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`}>
                    <button className={`${styles.greenButton} green-button`}>
                    ارزیابی
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            : null
          );
        })}
        </div>
      </div>
      <span className={`${styles.sectionTitle} section-title`}>
          تا سال 2050 
      </span>
      <span className={`${styles.sectionDescription} section-description`}>
      برنامه‌های سفر کربن صفر 
      </span>
      <div className="container-fluid">
        <div className="row">
        {data.map((item) => {
          return (
            item.netZeroYear === "2050" ? 
            <div className="col-md-3" key={item.title}>
              <div className={styles.planItem} >
                <div className={styles.topTexts}>
                  <span className={styles.title}>{item.title}</span>
                  {/* <span className={styles.value}>
                    {stylePrice(item.price.toString())} <small style={{fontSize:"12px",paddingRight:"5px"}}> میلیون تومان </small>
                  </span> */}
                </div>
                <div className={styles.line}></div>

                <div className={styles.firstOffset}>
                  <Image
                      src="/images/netZero/benefit-item-img.png"
                      alt=""
                      width="30"
                      height="18"
                      />
                  <span> شروع با : {item.firstOffset}% جبران </span>
                </div>
                
                {item.benefits.map((benefitItem) => {
                  return (
                    <div className={styles.benefitItem} key={benefitItem}>
                      <Image
                        src="/images/netZero/benefit-item-img.png"
                        alt=""
                        width="30"
                        height="18"
                      />
                      <span>{benefitItem}</span>
                    </div>
                  );
                })}
                  <div style={{position:"absolute" , bottom:"30px"}}>
                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/`}>
                      <button className={`${styles.greenButton} green-button`}>
                      ارزیابی
                      </button>
                    </Link>
                  </div>
              </div>
            </div>
            : null
          );
        })}
        </div>
      </div>
    </section>
  );
};

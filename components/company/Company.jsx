"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Help from "../shared/help/Help";
import Footer from "../shared/footer/Footer";
import Nav from "../shared/nav/Nav";
import Steps from "../shared/steps/Steps";

import stylePrice from "@/hooks/stylePrice";

import styles from "./company.module.scss";
import "./company.scss";

export default function Company({ serverStatus, serverData }) {
  const router = useRouter();
  const plansElement = useRef(null);

  let [isFirstLoad, setIsFirstLoad] = useState(true);
  let getPlansElement = (element) => {
    plansElement.current = element;
    setIsFirstLoad(false);
  };

  const [questionsData] = useState([
    {
      id: "1",
      title: "ردپای کربن سالانه کسب و کار شما چطور محاسبه می‌شود؟",
      description:
        "ردپای کربن سالانه یک کسب و کار شامل اندازه‌گیری و ارزیابی انتشار گازهای گلخانه‌ای در سه محدوده مختلف عملیاتی است.",
      mainImg: "/images/company/question-img1.jpg",
    },
    {
      id: "2",
      title: "بهترین پروژه برای جبران انتشار کسب و کار شما چه می‌باشد؟",
      description:
        "با مراجعه به صفحه پروژه ها و انتخاب پروژه مورد نظر خود می توانید به راحتی پروژه کربن  را انتخاب کنید. این پروژه ها در دسته بندی های مختلفی مانند انرژی های تجدیدپذیر، حفاظت از جنگل ها، بهره وری انرژی و غیره موجود می باشند.",
      mainImg: "/images/company/question-img2.jpg",
    },
    {
      id: "3",
      title: "برنامه های ما",
      description:
        "با خرید هر یک از طرح‌های ارزیابی کربن، می‌توانید از انتشار کربن خود در اتمسفر باخبر شوید و در کاهش و جبران اثرات گلخانه‌ای به ما بپیوندید. از شما دعوت می کنیم در تلاش برای کاهش و جبران اثرات انتشار کربن بر محیط زیست به خصوص تغییرات اقلیم با ما همراه شوید.",
      mainImg: "/images/company/question-img3.jpg",
    },
  ]);
  const [stepsData] = useState({
    title: "اقدامات بعد از ارزیابی",
    subtitle: "",
    stepsData: [
      {
        id: "1",
        img: "/images/company/plan-list.png",
        imgWidth: 75,
        imgHeight: 90,
        firstString: "انتخاب",
        secondString: "برنامه",
        onClick: function () {
          onBuyPlanClick();
        },
      },
      {
        id: "2",
        img: "/images/main/step1.png",
        imgWidth: 75,
        imgHeight: 90,
        firstString: "محاسبه",
        secondString: "کربن",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/calculate/calculator`);
        },
      },
      {
        id: "3",
        img: "/images/main/step2.svg",
        imgWidth: 115,
        imgHeight: 80,
        firstString: "انتخاب",
        secondString: "پروژه",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/carbon-project`);
        },
      },
      {
        id: "4",
        img: "/images/main/step3.png",
        imgWidth: 55,
        imgHeight: 90,
        firstString: "جبران",
        secondString: "کربن",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/offset`);
        },
      },
    ],
  });

  let onBuyPlanClick = () => {
    if(typeof window !== "undefined"){
      window.scrollTo(
        0,
        plansElement.current.getBoundingClientRect().top + window.scrollY
      );
    }
  };
  return (
    <>
      <Nav />
      {/* ====================START HEADER========================== */}
      <CompanyHeader onBuyPlanClick={onBuyPlanClick} />
      {/* ====================END HEADER==========================  */}
      {/* <!-- ==========================START STEPS SECTION======================== --> */}
      <Steps data={stepsData} />
      {/* <!-- ==========================END STEPS SECTION======================== --> */}
      {/* <!-- ==========================START QUESTION SECTION======================== --> */}
      <CompanyQuestions questionsData={questionsData} />
      {/* <!-- ==========================END QUESTION SECTION======================== --> */}
      {/* <!-- ==========================START PLAN SECTION======================== --> */}
      <CompanyPlans
        serverData={serverData}
        onFirstLoad={getPlansElement}
        isFirstLoad={isFirstLoad}
      />
      {/* <!-- ==========================END PLAN SECTION======================== --> */}

      {/* <!-- ==========================START HELP SECTION======================== --> */}
      <Help />
      {/* <!-- ==========================END HELP SECTION======================== --> */}
      {/* <!-- ==========================START FOOTER======================== --> */}
      <Footer />
      {/* <!-- ==========================END FOOTER======================== --> */}
    </>
  );
}

const CompanyHeader = ({ onBuyPlanClick }) => {
  return (
    <header className={`${styles.header} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
      اهداف انتشار کربن کسب و کار خود را انتخاب کنید
      </span>

      <div className={styles.imgContainer}>
        <div className={styles.treeRow}>
          <Image
            src="/images/company/header-side-tree.png"
            alt=""
            width="50"
            height="90"
          />
          <Image
            src="/images/company/header-side-tree.png"
            alt=""
            width="50"
            height="90"
          />
          <Image
            src="/images/company/header-center-tree.png"
            alt=""
            width="100"
            height="120"
          />
          <Image
            src="/images/company/header-side-tree.png"
            alt=""
            width="50"
            height="90"
          />
          <Image
            src="/images/company/header-side-tree.png"
            alt=""
            width="50"
            height="90"
          />
        </div>
        <div className={styles.bottomLine}></div>
      </div>

      <div className={styles.buttonContainer}>
        <button
          className={`${styles.blueLightButton} blue-light-button`}
          onClick={onBuyPlanClick}
        >
          ارزیابی
        </button>
        <span className={`${styles.sectionTitle} section-title`} style={{color:"#535353"}}>یا</span>
        <Link href="/projects">
          <button className="green-button"> پروژه‌های جبران کربن </button>
        </Link>
      </div>
    </header>
  );
};

const CompanyQuestions = ({ questionsData }) => {
  return (
    <section className={`${styles.questions} body-container`}>
      {questionsData.map((item) => {
        return (
          <div key={item.id} className={styles.questionItem}>
            <div className={styles.textContainer}>
              <span className={`${styles.sectionBlueTitle} section-blue-title`}>
                {item.title}
              </span>
              <span className={styles.description}>{item.description}</span>
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

const CompanyPlans = ({ serverData, onFirstLoad, isFirstLoad }) => {
  const plansRef = useRef();
  useEffect(() => {
    if (isFirstLoad) {
      onFirstLoad(plansRef.current);
    }
  }, [isFirstLoad]);

  return (
    <section className={`${styles.plans} body-container`} ref={plansRef}>
      <span className={`${styles.sectionTitle} section-title`}>
      برنامه‌های آپام برای کسب و کارها
      </span>
      <span className={`${styles.sectionDescription} section-description`}>
      برنامه‌ها براساس سایز کسب و کار شما طراحی شده‌‌اند
      </span>
      <div className="container-fluid">
        <div className="row">
        {serverData.map((planItem) => {
          return (
            <div className="col-md-3" key={planItem.title}>
              <div className={styles.planItem} >
                <div className={styles.topTexts}>
                  <span className={styles.title}>{planItem.title}</span>
                  {/* <span className={styles.value}>
                    {stylePrice(planItem.price.toString())} <small style={{fontSize:"12px",paddingRight:"5px"}}> میلیون تومان </small>
                  </span> */}
                </div>
                <div className={styles.line}></div>
                {planItem.benefits.map((benefitItem) => {
                  return (
                    <div className={styles.benefitItem} key={benefitItem}>
                      <Image
                        src="/images/company/benefit-img.png"
                        alt=""
                        width="30"
                        height="18"
                      />
                      <span>{benefitItem}</span>
                    </div>
                  );
                })}
                <div style={{position:"absolute" , bottom:"30px"}}>
                  <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/calculate/calculator`}>
                    <button
                      className={`${styles.blueLightButton} blue-light-button`}
                      >
                      ارزیابی
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};



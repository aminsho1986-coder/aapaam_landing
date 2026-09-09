"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import Nav from "../shared/nav/Nav";
import Steps from "../shared/steps/Steps";

import "./main.scss";
import stylePrice from "@/hooks/stylePrice";
import Companies from "../shared/companies/Companies";
import News from "../shared/news/News";
import Footer from "../shared/footer/Footer";
import Help from "../shared/help/Help";


export default function Main({ serverData }) {
  const router = useRouter();

  const [stepsData] = useState({
    title: "چه کاری انجام می‌دهیم؟",
    subtitle: "با طی 4 مرحله ساده، مسیر جبران کربن خود را شروع کنید!",
    stepsData: [
      {
        id: "1",
        img: "/images/main/step1.png",
        imgWidth: 75,
        imgHeight: 90,
        firstString: "محاسبه",
        secondString: "انتشار کربن",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/calculate/calculator`);
        },
      },
      {
        id: "2",
        img: "/images/main/step2.svg",
        imgWidth: 115,
        imgHeight: 90,
        firstString: "انتخاب",
        secondString: "پروژه جبران",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/carbon-project`);
        },
      },
      {
        id: "3",
        img: "/images/main/step3.png",
        imgWidth: 55,
        imgHeight: 80,
        firstString: "جبران",
        secondString: "انتشار کربن",
        onClick: function () {
          router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/offset`);
        },
      },

    ],
  });
  const [FAQData] = useState([
    {
      title: "معرفی پلتفرم آپام",
      description:
        "آپام یک پلتفرم نرم‌افزار به‌عنوان سرویس (SaaS) است، که به کسب‌وکارها و افراد این امکان را می‌دهد تا ردپای کربن خود را ارزیابی و جبران کنند و اقدامات موثری در راه مقابله با تغییرات آب و هوایی انجام دهند.",
      height: 0,
    },
    {
      title: "آپام چطور به زمین کمک میکند؟",
      description:
        "در راستای انتخاب‌های مسئولانه و تاثیر مثبت بر کره زمین، آپام به عنوان پلتفرم ارزیابی و جبران ردپای کربن در کنار صاحبان کسب وکارها در مسیر فرهنگ‌سازی و آگاهی رسانی مصرف کنندگان کالا و خدمات برای مقابله با مسئله گرمایش زمین گام بر‌میدارد.",
      height: 0,
    },
    {
      title: "چرا باید اثرات گلخانه‌ای خود را جبران کنم؟",
      description:
        "با جبران اثرات گلخانه‌ای خود گامی موثر در جهت کاهش گرمایش زمین و تغییرات آب و هوایی برمیداریم. با کاهش انتشار کربن، ابتدا از محیط زیست خود محافظت می‌کنیم، توسعه پایدار را گسترش می‌دهیم و مسئولیت ‌خود را به عنوان تولید‌کننده یا مصرف‌کننده کالا یا خدمات انجام می دهیم؛ این یک تلاش جمعی برای زمین و آینده ما در این کره خاکی است.",
      height: 0,
    },
  ]);
  const [aboutData] = useState([
    {
      id: "1",
      fullName: "نام و نام خانوادگی",
      company: "شرکت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      id: "2",
      fullName: "نام و نام خانوادگی",
      company: "شرکت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      id: "3",
      fullName: "نام و نام خانوادگی",
      company: "شرکت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      id: "4",
      fullName: "نام و نام خانوادگی",
      company: "شرکت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      id: "5",
      fullName: "نام و نام خانوادگی",
      company: "شرکت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
  ]);
  let [isFirstLoad, setIsFirstLoad] = useState(true);
  let onFirstLoadFAQs = (data) => {
    data.current.forEach((element, index) => {
      FAQData.map((item, i) => {
        if (i === index) {
          return (item.height = element.childNodes[1].scrollHeight);
        } else {
          return item;
        }
      });
      element.classList.remove("open");
    });
    setIsFirstLoad(false);
  };
  let onFAQClick = (index, element) => {
    if (element.currentTarget.parentNode.className.includes("open")) {
      element.currentTarget.parentNode.childNodes[1].style = `height: 0px;`;
    } else {
      element.currentTarget.parentNode.childNodes[1].style = `height: ${FAQData[index].height}px;`;
    }
    element.currentTarget.parentNode.classList.toggle("open");
  };

  return (
    <>
      <Nav />
      {/* <!-- =====================START HEADER========================== --> */}
      <HeaderSection />
      {/* <!-- =====================END HEADER ========================== --> */}

      {/* <!-- =====================START STEPS SECTION========================== --> */}
      <Steps data={stepsData} />
      {/* <!-- =====================END STEPS SECTION========================== --> */}

      {/* <!-- =====================START COUNTER SECTION========================== --> */}
      <CounterSection
        trees={Math.round(serverData.response.trees)}
        co2={Math.round(serverData.response.co2)}
      />
      {/* <!-- =====================END COUNTER SECTION========================== --> */}

      {/* <!-- =====================START CALCULATE SECTION========================== --> */}
      <CalculateSection />
      {/* <!-- =====================END CALCULATE SECTION========================== --> */}

      {/* <!-- =====================START NUMBERS SECTION========================== --> */}
      <NumbersSection data={serverData.bannersResponse} />
      {/* <!-- =====================END NUMBERS SECTION========================== --> */}

      {/* <!-- =====================START FOREST SECTION========================== --> */}
      <ForestSection />
      {/* <!-- =====================END FOREST SECTION========================== --> */}
      {/* <!-- =====================START COMPANIES SECTION========================== --> */}
      <Companies />
      {/* <!-- =====================END COMPANIES SECTION========================== --> */}
      {/* <!-- =====================START WORKS SECTION========================== --> */}
      <WorkSection />
      {/* <!-- =====================END WORKS SECTION========================== --> */}

      {/* <!-- =====================START SELLS SECTION========================== --> */}
      <SellsSection />
      {/* <!-- =====================END SELLS SECTION========================== --> */}
      
      {/* <!-- =====================START MARKET SECTION========================== --> */}
      <MarketSection />
      {/* <!-- =====================END MARKET SECTION========================== --> */}

      {/* <!-- =====================START FAQS SECTION========================== --> */}
      <FAQSection
        data={FAQData}
        isFirstLoad={isFirstLoad}
        onFirstLoadFAQs={onFirstLoadFAQs}
        onFAQClick={onFAQClick}
      />
      {/* <!-- =====================END FAQS SECTION========================== --> */}

      {/* <!-- =====================START NEWS SECTION========================== --> */}
        {/* <News /> */}
      {/* <!-- =====================END NEWS SECTION========================== --> */}

      {/* <!-- =====================START QUESTION SECTION========================== --> */}
      <Help />
      {/* <!-- =====================END QUESTION SECTION========================== --> */}

      {/* <!-- =====================START ABOUT SECTION========================== --> */}
        {/* <AboutSection data={aboutData} /> */}
      {/* <!-- =====================END ABOUT SECTION========================== --> */}

      {/* <!-- =====================START END OF PAGE SECTION========================== --> */}
      <EndPageSection />
      {/* <!-- =====================END OF PAGE========================== --> */}

      {/* <!-- =====================START OF FOOTER SECTION========================== --> */}
        <Footer />
      {/* <!-- =====================END OF FOOTER========================== --> */}
    </>
  );
}

const HeaderSection = () => {
  return (
    <header className="header body-container">
      <video 
          width="100%" muted loop autoPlay playsInline 
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            height: "100%",
            objectFit: "cover"
          }}
        >
          <source type="video/mp4" src="/videos/header.mp4"/>
        </video>
        
      <div className="header-center-container">
        <Image
          className="main-logo"
          src="/images/main/main-logo.svg"
          alt=""
          width="600"
          height="180"
        />
        <span className="title">
        مسئولیت‌پذیری، اقدام آگاهانه، نجات زمین      
          <br />
          با پذیرش نقش خود در جبران انتشار کربن بخشی از راه‌حل باشید
        </span>
        
        <div className="header-items-container">
          <Link href="/company">
            <button className="header-items transparent-button">جبران انتشار کربن شرکت</button>
          </Link>
          <Link href="/event">
            <button className="header-items transparent-button"> جبران انتشار کربن رویداد‌ها </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

const CounterSection = ({ trees=0, co2=0 }) => {
  let numbersToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let treesString = "0".repeat(8 - trees.toString().length) + trees.toString();
  let co2String = "0".repeat(8 - co2.toString().length) + co2.toString();
 
  let treesData = treesString.split("");
  let co2Data = co2String.split("");

  return (
    <section className="bottom-header body-container" >
      <Image
        src="/images/main/header-left.png"
        alt=""
        className="top-left"
        width="200"
        height="200"
      />
      <Image
        src="/images/main/header-right.png"
        alt=""
        className="bottom-right"
        width="200"
        height="200"
      />
      <div id="co2Counter" className="bottom-header-item">
        <Image
          src="/images/main/c02-bottom-header.png"
          alt=""
          width="113"
          height="40"
        />
        <div className="counter-container">
          <div className="counter-inside">
            <div className="text-container">
              <div className="title">تن</div>
              <div className="description">کربن</div>
            </div>
            <div className="counter-item-row">
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{co2Data[0]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{co2Data[1]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{co2Data[2]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{co2Data[3]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{co2Data[4]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  
                  <div className="container final-container">
                    <span className="counter-text">{co2Data[5]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  
                  <div className="container final-container">
                    <span className="counter-text">{co2Data[6]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  
                  <div className="container final-container">
                    <span className="counter-text">{co2Data[7]}</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <span className="bottom-header-span left-span">
          میزان کربن کاهش یا حذف شده توسط مشتریان ما 
        </span>
      </div>
      <div id="treeCounter" className="bottom-header-item">
        <Image
          src="/images/main/trees-bottom-header.png"
          alt=""
          width="133"
          height="58"
        />
        <div className="counter-container">
          <div className="counter-inside">
            <div className="text-container">
              <div className="title">تعداد</div>
              <div className="description">درخت</div>
            </div>
            <div className="counter-item-row">
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{treesData[0]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{treesData[1]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{treesData[2]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{treesData[3]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{treesData[4]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{treesData[5]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{treesData[6]}</span>
                  </div>
                </div>
              </div>
              <div className="counter-item">
                <div className="counter-item-inside">
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  {numbersToTen.map((item) => {
                    return (
                      <div className="container" key={item}>
                        <span className="counter-text">{item}</span>
                      </div>
                    );
                  })}
                  <div className="container final-container">
                    <span className="counter-text">{treesData[7]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="bottom-header-span"> معادل است با کاشتن </span>
      </div>
    </section>
  );
};

const CalculateSection = () => {
  return (
    <section className="calculate body-container">
      <div className="calculate-left">
        <span className="section-title"> قدم اول، محاسبه و ارزیابی ! </span>
        <span className="section-description">
          محاسبه کربن شما، فقط با اشتراک‌گذاری اطلاعات فردی یا شرکت خود.
        </span>
        <div className="calculate-button-row">
          <Link href="/company">
            <button className="blue-light-button"> شرکت ها </button>
          </Link>
        </div>
      </div>
      <div className="calculate-right">
        <Image
          src="/images/main/calculate-img.webp"
          alt=""
          width="700"
          height="420"
          priority 
        />
      </div>
    </section>
  );
};

const NumbersSection = ({ data }) => {
  return (
    <section className="numbers body-container">
      <Image
        src="/images/main/numbers-left.png"
        alt=""
        className="top-left"
        width="260"
        height="304"
      />
      <Image
        src="/images/main/header-right.png"
        alt=""
        className="bottom-right"
        width="260"
        height="305"
      />
      <div className="number-item">
        {/* <span>{data.projects? data.projects + 3 : 3}</span> */}
        <span>3</span>
        <span>پروژه ها</span>
      </div>
      <div className="number-item">
        {/* <span>{data.trees? data.trees + 22000 : 22000}</span> */}
        <span>22000</span>
        <span>درخت کاشته شده</span>
      </div>
      <div className="number-item">
        <span>{data.partnerships?stylePrice(data.partnerships.toString()):0}</span>
        <span>همکاری ها</span>
      </div>
      <div className="number-item">
        {/* <span>{data.companies? data.companies + 42: 42}</span> */}
        <span>42</span>
        <span>شرکت ها</span>
      </div>
    </section>
  );
};

const ForestSection = () => {
  return (
    <section className="forest body-container" >
      <div className="forest-left">
        <Image
          className="main-forest-img"
          src="/images/main/jungle.jpeg"
          alt=""
          width="700"
          height="420"
          priority 
        />
    
      </div>
      <div className="forest-right">
        <span className="section-title"> قدم دوم، انتخاب یک پروژه جبرانی </span>
        <span className="section-description">
        بازآفرینی جنگل! با مشارکت در یک پروژه، کربن خود را جبران کنید.
        </span>
        <Link href="/projects">
          <button className="blue-light-button"> پروژه‌های ما </button>
        </Link>
      </div>
    </section>
  );
};

const WorkSection = () => {
  return (
    <section className="calculate body-container" style={{padding:"60px 0"}}>

      <div className="calculate-left">
        <span className="section-title">
        قدم سوم، کربن خود را جبران کنید و میزان ردپای خود را ببینید.
        </span>
        <span className="section-description">
        شما قادر هستید که تمامی مراحل محاسبه، خرید، فروش و دیگر امور مربوط به کربن سالانه شرکت خود را از طریق یک داشبورد مدیریت کنید. 
        </span>
      </div>

      <div className="calculate-right">
       <Image src="/images/main/offset.jpeg" alt="" width="700" height="420" priority />
      </div>
    </section>
  );
};



const SellsSection = () => {
  return (
    <section className="forest body-container mb-5" style={{paddingTop:"60px"}}>
      <div className="forest-left" style={{marginInlineEnd:0}}>
        <Image
          className="main-forest-img"
          src="/images/main/clouds.webp"
          alt=""
          width="700"
          height="420"
        />
      </div>
      <div className="forest-right">
        <span className="section-title"> درآخر، اعتبار خودرا مبادله کنید </span>
        <span className="section-description">
        در بازار کربن آپام، می‌توانید اعتبار آزاد کربن خود را خرید و فروش کنید.
        </span>
        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/trade`} >
          <button className="blue-light-button"> شروع کن! </button>
        </Link>
      </div>
    </section>
  );
};

const MarketSection = () => {
  return (
    <section className="market body-container">
      <div className="market-left">
        <Image
          src="/images/main/market-img.png"
          alt=""
          width="410"
          height="300"
        />
      </div>
      <div className="market-right">
        <span className="section-title"> امکانات </span>
        <span> شما می‌توانید با استفاده از کلید API، کد HTML و کد QR به راحتی از سرویس ما بهره‌مند شوید. </span>
        <Link href="resources">
          <button className="white-button-light-blue-text"> بیشتر بدانید </button>
        </Link>
      </div>
    </section>
  );
};

const FAQSection = ({ data, isFirstLoad, onFirstLoadFAQs, onFAQClick }) => {
  const itemsRef = useRef([]);

  useEffect(() => {
    if (isFirstLoad) {
      onFirstLoadFAQs(itemsRef);
    }
  }, [isFirstLoad]);

  return (
    <section className="faqs body-container" style={{backgroundColor:"#f1f1f1"}}>
      <span className="section-title"> سوالات پرتکرار </span>
      {data.map((item, index) => {
        return (
          <div
            className="faqs-item open"
            key={item.title}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div
              className="top-container"
              onClick={onFAQClick.bind(itemsRef.current[index], index)}
            >
              {/* onClick={onItemClick(item)} */}
              <div className="top-container-left">
                <span>{index + 1}.</span>
                <span>{item.title}</span>
              </div>
              <Image
                src="/images/main/faqs-arrow-down.png"
                alt=""
                width="20"
                height="20"
              />
            </div>
            <span className="description-text">{item.description}</span>
          </div>
        );
      })}
      {/* <Link href={"/mag"}>
        <button className="blue-light-button"> بیشتر ... </button>
      </Link> */}
    </section>
  );
};

const QuestionSection = () => {
  return (
    <section className="question body-container">
      <span className="section-title">
        in case you have a question about ...
      </span>
      <Link href="/about">
        <button className="blue-light-button">Contact us</button>
      </Link>
    </section>
  );
};

const AboutSection = ({ data }) => {
  const [slides, setSlides] = useState(3);
  const aboutWrapper = useRef(null);
  const swiperSlide = useRef(null);
  useInitializeSlides(aboutWrapper);
  function useInitializeSlides(ref) {
    useEffect(() => {
      if (ref.current) {
        setSlides(
          ref.current.offsetWidth / swiperSlide.current.offsetWidth - 0.05
        );
      }
    }, [ref]);
  }

  return (
    <section className="about body-container">
      <span className="section-title"> نظرات درباره ی ما </span>
      <div ref={aboutWrapper} className="about-row">
        <Swiper
          slidesPerView={slides}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="aboutSwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id} ref={swiperSlide}>
                <div className="about-item">
                  <div className="top">
                    <div className="profile"></div>
                    <div className="texts">
                      <span className="name">{item.fullName}</span>
                      <span className="company">{item.company}</span>
                    </div>
                  </div>
                  <span className="description">{item.description}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

const EndPageSection = () => {
  return (
    <section className="bottom-green body-container">
        <span className="sectionTitle section-title">
        اکنون برای محافظت از زمین، می‌توانید به جامعه جبران‌کنندگان کربن بپیوندید!
        </span>
        <div className='buttonRow'>
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
  );
};

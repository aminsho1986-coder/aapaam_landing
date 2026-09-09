"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import styles from "./single-project.module.scss";
import Image from "next/image";
import Nav from "../shared/nav/Nav";
import Footer from "../shared/footer/Footer";
import Link from "next/link";

export default function SingleProject({ serverStatus, serverData }) {
  const router = useRouter();
  const position = serverData.lat ? [serverData.lat, serverData.long] : [0, 0];

  if (!serverData || !serverData.images) {
    return null;
  }
  const [map, setMap] = useState(null);
  const [MapComp, setMapComp] = useState(null);
  useEffect(() => {
    import("./ProjectMap").then((mod) => setMapComp(() => mod.default));
  }, []);
  useEffect(() => {
    if (map) {
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);
  useEffect(() => {
    if (!serverStatus) {
      router.push("/projects");
    }
  }, []);
  
  return (
    <>
      <Nav />
      <section className={styles.singleProject}>
        <span className={styles.title}>{serverData.title}</span>
          <div >
            <Image
              src={
                process.env.NEXT_PUBLIC_BASE_URL_IMAGES + serverData.images[0]
              }
              width={1050}
              height={440}
              alt="project pic"
              priority
              quality={100}
            />
          </div>
        <div className={styles.projectData}>
          <div className={styles.mainData}>
            <div className={styles.right}>
              <div className={styles.benefitsContainer}>
                <div className={styles.benefitItem}>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/images/projects/benefit1.png"
                      width={18}
                      height={18}
                      alt="carbon project detail"
                    />
                  </div>
                  <span>
                      {
                        serverData.projectType === "afforestation" ? "جنگل‌کاری" : 
                        serverData.projectType === "cleanEnergy" ? "انرژی تجدید پذیر" :
                        serverData.projectType === "energyEfficiency" ? "بهره وری انرژی" : "مدیریت آب"
                      }
                  </span>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/images/projects/benefit2.png"
                      width={18}
                      height={18}
                      alt="carbon project detail"
                    />
                  </div>
                  <span>{serverData.area.toString()} هکتار </span>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/images/projects/benefit3.png"
                      width={18}
                      height={18}
                      alt="carbon project detail"
                    />
                  </div>
                  <span>{serverData.totalCarbon.toString()} تن </span>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.imgContainer}>
                    <i
                      className={`fa-regular fa-calendar ${styles.calenderIcon}`}
                    ></i>
                  </div>
                  <span>
                    شروع : {" "}
                    {serverData.startDate}
                  </span>
                </div>
              </div>
              <div className={styles.bottom}>
                {
                  serverData.expire ? 
                  <span className={styles.expire}>
                   (تمام شده)
                  </span>
                  : null
                  }
                <span className={styles.subject}> تومان / هر تن </span>
                <span className={styles.value}>
                  {serverData.carbonPrice.toString()} {" "}
                </span>
              </div>
            </div>
          </div>
          
          <div className="row w-100 text-center" style={{maxWidth:"1050px"}}>
            <div className='col-4 col-xs-4'>
              <div className={styles.benefitItem}>
                  <b className="d-block"> موقعیت : </b> {" "}
                <span>
                  {serverData.location}
                </span>
              </div>
            </div>
            <div className='col-4 col-xs-4'>
              <div className={styles.benefitItem}>
                <b className="d-block">دسته بندی : </b>{" "}
                <span dir="rtl"> 
                  {serverData.category}
                </span>
              </div>
            </div>
            <div className='col-4 col-xs-4'>
              <div className={styles.benefitItem}>
                <b className="d-block">استاندارد  : </b>{" "}
                <span>
                  {serverData.standard}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.description}>{serverData.description}</div>
        </div>
        <div className={styles.questions}>
          <div className={styles.questionItem} >
            <div className={styles.questionImgContainer}>
              <div className={styles.questionImg}>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BASE_URL_IMAGES +
                    serverData.images[1]
                  }
                  width={500}
                  height={335}
                  alt="carbon project"
                  className={styles.mainImg}
                  priority
                />
              </div>
            </div>
            <div className={styles.questionTexts}>
              <span className={styles.title}>
              تاثیر محیط زیستی پروژه
              </span>
              <div className={styles.bottomText}>
                {serverData.environmentalBenefits.map((item) => {
                  return (
                    <>
                      <span>{item}</span>
                      <br />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`${styles.questionItem} my-5`} >
            <div className={styles.questionImgContainer}>
              <div className={styles.questionImg}>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BASE_URL_IMAGES +
                    serverData.images[2]
                  }
                  width={500}
                  height={335}
                  alt="carbon project"
                  className={styles.mainImg}
                  priority
                />
              </div>
            </div>
            <div className={styles.questionTexts}>
              <span className={styles.title}> تاثیر اجتماعی پروژه </span>
              <div className={styles.bottomText}>
                {serverData.communityBenefits.map((item) => {
                  return (
                    <>
                      <span>{item}</span>
                      <br />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.questionItem}>
            <div className={styles.questionImgContainer}>
              <div className={styles.questionImg}>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BASE_URL_IMAGES +
                    serverData.images[3]
                  }
                  width={500}
                  height={335}
                  alt="carbon project"
                  className={styles.mainImg}
                  priority
                />
              </div>
            </div>
            <div className={styles.questionTexts}>
              <span className={styles.title}> اهداف کلی پروژه </span>
              <div className={styles.bottomText}>
                {serverData.goals.map((item) => {
                  return (
                    <>
                      <span>{item}</span>
                      <br />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="row w-100 text-center my-5">
          <div className='col-12'>
            <Link
              href={process.env.NEXT_PUBLIC_BASE_URL_IMAGES + serverData.document}
              className={styles.doc}
              target="_blank"
            >
              مشاهده سند پروژه
              <i className="fa-solid fa-file-arrow-down fa-xl" style={{marginInlineStart:"8px"}}></i>
            </Link>
          </div>
        </div>

        <div className={styles.containerMap}>
          {MapComp && <MapComp position={position} setMap={setMap} />}
        </div>
      </section>
      <Footer />
    </>
  );
}

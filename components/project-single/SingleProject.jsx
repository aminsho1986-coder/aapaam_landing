"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useRouter } from "next/navigation";
import styles from "./single-project.module.scss";
import Image from "next/image";
import Nav from "../shared/nav/Nav";
import Footer from "../shared/footer/Footer";
import Link from "next/link";



const iconPerson = new L.Icon({
  iconUrl:
    "data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Desktop - 73' clip-path='url(%23clip0_0_1)'%3E%3Cg id='icons8-location 2'%3E%3Cpath id='Vector' d='M19.9884 18.7067C23.7433 14.8468 23.6582 8.6745 19.7983 4.91967C15.9384 1.16483 9.76611 1.24988 6.01128 5.10925C2.32957 8.89388 2.32957 14.9221 6.01128 18.7067C6.02103 18.717 6.02753 18.7284 6.03728 18.7387L6.06924 18.7706C6.0947 18.7966 6.12016 18.8221 6.14616 18.8475L12.2339 24.9353C12.657 25.3584 13.3427 25.3584 13.7658 24.9353L19.8536 18.8475C19.8796 18.8221 19.905 18.7966 19.9305 18.7706L19.9624 18.7387C19.9727 18.7284 19.9792 18.7165 19.9884 18.7067Z' fill='url(%23paint0_linear_0_1)'/%3E%3Cpath id='Vector_2' d='M13.0013 17.0622C15.8433 17.0622 18.1471 14.7583 18.1471 11.9163C18.1471 9.07438 15.8433 6.77051 13.0013 6.77051C10.1593 6.77051 7.85547 9.07438 7.85547 11.9163C7.85547 14.7583 10.1593 17.0622 13.0013 17.0622Z' fill='url(%23paint1_radial_0_1)'/%3E%3Cpath id='Vector_3' d='M13.0013 16.2497C15.3945 16.2497 17.3346 14.3096 17.3346 11.9163C17.3346 9.52311 15.3945 7.58301 13.0013 7.58301C10.6081 7.58301 8.66797 9.52311 8.66797 11.9163C8.66797 14.3096 10.6081 16.2497 13.0013 16.2497Z' fill='%23F9F9F9'/%3E%3C/g%3E%3C/g%3E%3Crect id='Rectangle 342' x='-137.5' y='-128.5' width='378' height='219' rx='40.5' stroke='%23C52222'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_1' x1='6.10445' y1='5.015' x2='19.8953' y2='18.8064' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23D43A02'/%3E%3Cstop offset='1' stop-color='%23B9360C'/%3E%3C/linearGradient%3E%3CradialGradient id='paint1_radial_0_1' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(13.0013 11.9163) scale(5.14583)'%3E%3Cstop offset='0.177'/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/radialGradient%3E%3CclipPath id='clip0_0_1'%3E%3Crect width='1440' height='777' fill='white' transform='translate(-1302 -330)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
});

export default function SingleProject({ serverStatus, serverData }) {
  const router = useRouter();
  const position = [serverData.lat, serverData.long];
  const [map, setMap] = useState(null);
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
                        serverData.projectType === "foresting" ? "درختکاری" : 
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
                <span className={styles.value}>
                  {serverData.carbonPrice.toString()} {" "}
                </span>
                <span className={styles.subject}> تومان / هر تن </span>
              </div>
            </div>
          </div>
          
          <div className="row w-100 text-center" style={{maxWidth:"1050px"}}>
            <div className='col-4 col-xs-4'>
              <div className={styles.benefitItem}>
                  <b> موقعیت : </b> {" "}
                <span>
                  {serverData.location}
                </span>
              </div>
            </div>
            <div className='col-4 col-xs-4'>
              <div className={styles.benefitItem}>
                <b>دسته بندی : </b>{" "}
                <span dir="ltr"> 
                  {serverData.category}
                </span>
              </div>
            </div>
            <div className='col-4 col-xs-4'>
              <div className={styles.benefitItem}>
                <b>استاندارد  : </b>{" "}
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
          <MapContainer
            center={position}
            zoom={5}
            className={styles.fullHeightMap}
            whenCreated={setMap}
            
          >
            <TileLayer
              attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            />
            <Marker position={position} icon={iconPerson}></Marker>
            {/* <Circle center={position} pathOptions={fillBlueOptions} radius={50} /> */}
          </MapContainer>
        </div>
      </section>
      <Footer />
    </>
  );
}

"use client";

import Nav from "../shared/nav/Nav";
import News from "../shared/news/News";

import Image from "next/image";

import styles from "./projects.module.scss";
import Link from "next/link";
import Footer from "../shared/footer/Footer";
import { useEffect, useState } from "react";

export default function Projects({ serverStatus, serverData }) {
  return (
    <>
      <Nav />
      {/* <!-- ========================START HEADER===================== --> */}
      <ProjectsHeader />
      {/* <!-- ========================END HEADER===================== --> */}
      {/* <!-- ========================START PROJECTS SECTION===================== --> */}
      <ProjectsSection data={serverData} />
      {/* <!-- ========================END PROJECTS SECTION===================== --> */}
      {/* <!-- ========================START NEWS SECTION===================== --> */}
      <News />
      {/* <!-- ========================END NEWS SECTION===================== --> */}
      <Footer />
    </>
  );
}

const ProjectsHeader = () => {
  return (
    <header className={`${styles.header} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
        پروژه های ما
      </span>
      <Image
        src="/images/shared/world-map.png"
        alt=""
        width="911"
        height="495"
      />
    </header>
  );
};

const ProjectsSection = ({ data }) => {

  const [cat , setcat] = useState("all");
  const [items , setitems] = useState([]);


  useEffect( () => {

    if(cat === "all")
      setitems(data);
    else
      setitems(data.filter(el => el.projectType === cat));

  } , [cat])

 

  return (
    <section className={`${styles.projects} body-container`}>
        <div className="row my-5 w-100 d-flex justify-content-center">
          <div className="col-md-3" style={{width:"auto"}}>
            <div className={styles.type} onClick={() => cat === "foresting" ? setcat("all") : setcat("foresting")} >
              <div className={cat === "foresting" ? `${styles.projectTypeItem} ${styles.active}` : styles.projectTypeItem} >
                <div className={styles.imgContainer}>
                  <Image src={"/images/projects/project-type1.svg"} width="50" height="50" />
                </div>
                <span className={styles.bottomText}>جنگل کاری</span>
                <div className={styles.textBack}></div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{width:"auto"}}>
            <div className={styles.types} onClick={() =>{cat === "cleanEnergy" ? setcat("all") : setcat("cleanEnergy")}} >
              <div className={cat === "cleanEnergy" ? `${styles.projectTypeItem} ${styles.active}` : styles.projectTypeItem} >
                <div className={styles.imgContainer}>
                  <Image src={"/images/projects/project-type2.svg"} width="50" height="50" />
                </div>
                <span className={styles.bottomText}> انرژی های پاک </span>
                <div className={styles.textBack}></div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{width:"auto"}}>
            <div className={styles.types} onClick={() =>{ cat === "energyEfficiency" ? setcat("all") : setcat("energyEfficiency")}} >
              <div className={cat === "energyEfficiency" ? `${styles.projectTypeItem} ${styles.active}` : styles.projectTypeItem} >
                <div className={styles.imgContainer}>
                  <Image src={"/images/projects/project-type3.svg"} width="50" height="50" />
                </div>
                <span className={styles.bottomText}> بهره وری انرژی </span>
                <div className={styles.textBack}></div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{width:"auto"}}>
            <div className={styles.types} onClick={() =>{ cat === "waterManagement" ? setcat("all") : setcat("waterManagement")}} >
              <div className={cat === "waterManagement" ? `${styles.projectTypeItem} ${styles.active}` : styles.projectTypeItem} >
                <div className={styles.imgContainer}>
                  <Image src={"/images/projects/project-type4.svg"} width="50" height="50" />
                </div>
                <span className={styles.bottomText}>مدیریت آب</span>
                <div className={styles.textBack}></div>
              </div>
            </div>
          </div>
        </div>

      <div className="container">
        <div className="row w-100 m-0">
          {items.map((item) => {
            return (
              <div className="col-md-6 my-5" key={item.title}>
                <div className={styles.wrapper}>
                  <div className={styles.card}>
                    <Image src={item.images[0]} alt="" width="380" height="460" unoptimized={true} priority />
                    <div className={styles.cardBody}>
                      <div className="row">
                        <div className="col-8 m-auto col-sm-8">
                          <h1>{item.title}</h1>
                          <h3>
                            {item.projectType === "foresting" ? "درختکاری" : 
                              item.projectType === "cleanEnergy" ? "انرژی های پاک" :
                              item.projectType === "energyEfficiency" ? "بهره وری انرژی" : "مدیریت آب"}
                          </h3>
                        </div>
                        <div className="col-4 m-auto col-sm-4 text-center">
                          <p>{item.carbonPrice} <small> تومان/تن </small></p>
                          <p>{item.totalCarbon} <small> تن کربن </small></p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.info}>
                      <div className="row">
                        <div className="col-6 m-auto col-sm-6">
                          <h1>{item.title}</h1>
                          <h3>
                            {item.projectType === "foresting" ? "درختکاری" : 
                              item.projectType === "cleanEnergy" ? "انرژی های پاک" :
                              item.projectType === "energyEfficiency" ? "بهره وری انرژی" : "مدیریت آب"}
                          </h3>
                        </div>
                        <div className="col-6 m-auto col-sm-6">
                          <p>{item.carbonPrice} <small> تومان/تن </small></p>
                          <p>{item.totalCarbon} <small> تن کربن </small></p>
                        </div>
                      </div>
                      <p className={styles.des}>{item.description}</p>
                      
                      <Link
                        href={`/projects/${item.slug}`}
                        className={styles.buttonContainer}
                      >
                        <button > بیشتر بدانید </button>
                      </Link>
                    </div>
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

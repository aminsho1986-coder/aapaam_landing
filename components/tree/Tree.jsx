"use client";

import Image from "next/image";
import Footer from "../shared/footer/Footer";
import Nav from "../shared/nav/Nav";
import styles from "./tree.module.scss";

export default function Tree() {
  return (
    <>
      <Nav />
      <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان
          </h1>
          <p className={styles.firstDescription}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاق
          </p>
          <p className={styles.secondDescription}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با
          </p>
          <div className={styles.blueTexts}>
            <span>مراقب زمین هستیم...</span>
            <span>www.aapaam.net</span>
          </div>
          <Image
            src={"/images/tree/treePageImg.jpg"}
            width={668}
            height={492}
            alt={"نوروز پیروز"}
            className={styles.mainImg}
          />
          <div className={styles.bottomContent}>
            <div className={styles.firstContent + " " + styles.dashedBorder}>
              <span>کد درخت</span>
              <span>ZFMA 1 - 7500</span>
            </div>
            <div className={styles.bottom}>
              <div className={styles.qrCode}>
                <div className={styles.img + " " + styles.dashedBorder}>
                  <Image
                    src={"/images/tree/treePageImg.jpg"}
                    width={85}
                    height={85}
                    alt={"نوروز پیروز"}
                  />
                </div>
                <div className={styles.text}>
                  <span>اینجا را اسکن کنید</span>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.name + " " + styles.dashedBorder}>
                  <span>نام و نام‌خانوادگی</span>
                </div>
                <div className={styles.nameText + " " + styles.dashedBorder}>
                  <span>سبحان اسماعیلی</span>
                  <svg
                    width="27"
                    height="41"
                    viewBox="0 0 27 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.treeImg}
                  >
                    <path
                      d="M16.06 40.8096V32.2396H26.15V25.9496H23.63V19.6596H21.12V13.3796H18.6V7.08957H16.09V0.80957H11.06V7.08957H8.53999V13.3796H6.03V19.6596H3.52V25.9496H1V32.2396L11.06 32.2296V40.8096"
                      stroke="#00AEC1"
                      stroke-width="1"
                    />
                  </svg>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.companyLogo}>
                  <Image
                    src={"/images/tree/treePageImg.jpg"}
                    width={668}
                    height={492}
                    alt={"نوروز پیروز"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

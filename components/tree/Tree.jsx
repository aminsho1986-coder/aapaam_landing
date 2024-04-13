"use client";

import Image from "next/image";
import Footer from "../shared/footer/Footer";
import Nav from "../shared/nav/Nav";
import styles from "./tree.module.scss";

export default function Tree({ data }) {
  return (
    <>
      <Nav />
      <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>
            درختان به زمین نفس میبخشند
            <br />و پزشکان به انسان‌ها, جانی دوباره
          </h1>
          <h2 className={styles.secondTitle}>پزشک محترم</h2>
          <p className={styles.pageDescription}>
            به پاس زحمات ارزنده شما و به مناسبت آغاز سال نو
            <br />
            یک نهال به نام شما کاشته شده است.
          </p>
          <div className={styles.blueTexts}>
            <span>مراقب زمین هستیم...</span>
            <span>www.aapaam.net</span>
          </div>
          <Image
            src={"/images/tree/main.png"}
            width={616}
            height={454}
            alt={"نوروز پیروز"}
            className={styles.mainImg}
          />
          <div className={styles.footer}>
            <div className={styles.bottomContent}>
              <div className={styles.firstContent + " " + styles.dashedBorder}>
                <span>کد درخت</span>
                <span>ZFMA 1 - 7500</span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.qrCode}>
                  <div className={styles.img + " " + styles.dashedBorder}>
                    <img src="data:image/png;base64,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" alt="" />
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
                    <span className={styles.singleLine}>
                      {data["HCP Name"]}
                    </span>
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
                      src={"/images/tree/abidi.png"}
                      width={135}
                      height={59}
                      alt={"نوروز پیروز"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.logo}>
              <Image
                src={"/images/tree/logo.png"}
                width={100}
                height={157}
                alt={"لوگو آپام"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

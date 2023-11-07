"use client";

import Image from "next/image";

import "./news.scss";

export default function News() {
  return (
    <section className="news body-container">
      <span className="section-title"> اخبار و داستان‌ها </span>
      <span className="section-description">
      اخرین اخبار و داستان‌ها را میتوانید از اینجا دنبال کنید 
      </span>
      <div className="news-row">
        <div className="news-item">
          <Image src="/images/main/news1.png" alt="" width="320" height="220" />
          <span className="section-description"> پروژه زاگرس </span>
        </div>
        <div className="news-item">
          <Image src="/images/main/news2.png" alt="" width="320" height="220" />
          <span className="section-description"> پروژه هیرکانی </span>
        </div>
        <div className="news-item">
          <Image src="/images/main/news3.png" alt="" width="320" height="220" />
          <span className="section-description"> پروژه زاگرس </span>
        </div>
      </div>
    </section>
  );
}

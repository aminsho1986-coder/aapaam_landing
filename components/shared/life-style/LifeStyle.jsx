"use client";

import Image from "next/image";

import "./lifeStyle.scss";

export default function LifeStyle({ data }) {
  return (
    <section className="life-style body-container">
      <span className="section-title">
      آیا می‌دانید، چگونه می‌توانید با تغییر در سبک زندگی خود قدمی برای نجات زمین بردارید؟
      </span>
      <span className="section-description">
      می‌توانید با ایجاد تغییر در سبک زندگی و انتخاب‌های روزانه خود تاثیر مثبتی بر محیط زیست داشته باشید.
      </span>
      <div className="img-row">
        {data.map((item) => {
          return (
            <div className="img-item" key={item.id}>
              <Image
                className="main-img"
                src={item.img}
                alt=""
                width="490"
                height="360"
              />
              {/* <div className="download-container">
                <span> دانلود </span>
                <Image
                  src="/images/shared/download.png"
                  alt=""
                  width="32"
                  height="32"
                />
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

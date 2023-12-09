"use client";

import Link from "next/link";

import "./bottomGray.scss";

export default function BottomGray() {
  return (
    <section className="bottom-gray body-container">
      <span className="section-blue-title"> !سبز شو </span>
      <span className="section-description"> اگر می‌خواهید ردپای خود را جبران کنید، همین حالا شروع کنید </span>
      <div className="button-row">
        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/offset`}>
          <button className="white-button-light-blue-text"> جبران </button>
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/calculate/calculator`}>
          <button className="blue-light-button"> محاسبه </button>
        </Link>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import "./footer.scss";
import Link from "next/link";

export default function Footer() {
  
  const year = new Date().getFullYear();

  return (
    <footer className="footer body-container">
      <div className="row">
        <div className="footer-left">
          <div className="row w-100">
            <div className="col-lg-5 col-6 d-flex justify-content-start align-items-center">
              <Image
                src="/images/shared/main-logo-white.svg"
                alt=""
                className="logo"
                width="200"
                height="200"
              />
            </div>
            <div className="col-lg-5 col-6 d-flex justify-content-center">
              <div className="h-100 d-flex justify-content-center align-items-center">
                <a referrerPolicy='origin' target='_blank' href='https://trustseal.enamad.ir/u?id=376415&Code=LuIjtAjW9ZbUAGFP1ys3Kn7SPlxCYsQE'><img referrerPolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=376415&Code=LuIjtAjW9ZbUAGFP1ys3Kn7SPlxCYsQE' alt='' style={{cursor:'pointer'}} code='LuIjtAjW9ZbUAGFP1ys3Kn7SPlxCYsQE'/></a>
              </div>
            </div>
          </div>
          <span>
          آپام یک پلتفرم نرم‌افزار به‌عنوان سرویس (SaaS) است که به کسب‌وکارها و افراد این امکان را می‌دهد تا ردپای کربن خود را کاهش دهند و تأثیر واقعی در مبارزه با تغییرات آب و هوایی بگذارند.
          </span>
          <div className="media-row">
            <Link href={"https://www.linkedin.com/company/%D8%B1%D9%88%DB%8C%D8%B4-%DA%AF%D8%B3%D8%AA%D8%B1%D8%B2%DB%8C%D8%B3%D8%AA-%D8%A8%D9%88%D9%85/"}>
              <Image
                src="/images/shared/linkedin.png"
                alt=""
                width="36"
                height="36"
              />
            </Link>
            <Link href={"https://www.instagram.com/aapaam.group/"}>
              <Image
                src="/images/shared/instagram.png"
                alt=""
                width="36"
                height="36"
              />
            </Link>
            <Link href={"https://www.facebook.com/aapaamco/"}>
              <Image
                src="/images/shared/facebook.png"
                alt=""
                width="36"
                height="36"
              />
            </Link>
            <Link href={"https://twitter.com/Aapaamgroup"}>
              <Image
                src="/images/shared/twitter.png"
                alt=""
                width="38"
                height="38"
                />
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <div className="left">
            <span className="footer-title">محصولات</span>
            <div className="text-container">
              <Link href="/company">
                <span className="footer-text"> شرکت ها </span>
              </Link>
              <Link href="/individual">
                <span className="footer-text"> اشخاص </span>
              </Link>
              <Link href="/event">
                <span className="footer-text"> رویداد ها </span>
              </Link>
              <Link href="/net-zero">
                <span className="footer-text"> نت زیرو </span>
              </Link>
            </div>
          </div>
          <div className="right">
            <span className="footer-title"> تماس </span>
            <div className="text-container">
              <div className="d-flex mb-2">
                <i className="fa-solid fa-envelope" style={{marginTop:"5px",marginInlineEnd:"10px",color:"#e0ebec"}}></i>
                <a href="mailto:info@aapaam.net"> <span className="footer-text">info@aapaam.net</span> </a>
              </div>
              <div className="d-flex mb-2">
                <i className="fa-solid fa-phone" style={{marginTop:"5px",marginInlineEnd:"10px",color:"#e0ebec"}}></i>
                <a href="tel:02191010343"><span className="footer-text">02191010343 </span> </a> 
                <span className="footer-text mx-2">-</span> 
                <a href="tel:09123582419"><span className="footer-text">09123582419 </span> </a> 
              </div>
              <div className="d-flex mb-2">
                <i className="fa-brands fa-usps" style={{marginTop:"5px",marginInlineEnd:"10px",color:"#e0ebec"}}></i>
                <span className="footer-text">1391955385</span>
              </div>
              <div className="d-flex">
                <i className="fa-solid fa-location-dot" style={{marginTop:"5px",marginInlineEnd:"10px",color:"#e0ebec"}}></i>
                <span className="footer-text"> تهران ، میدان آزادی ، اتوبان شهید لشگری بعد از ایستگاه مترو بیمه ، پلاک 31 ، ساختمان کارخانه نوآوری آزادی ، سالن زاویه </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="footer-rights text-left">
          <span className="footer-text">Copyright © 2023-{year} Aapaam Group. All Rights Reserved.</span>
          <div className="footer-bottom">
            <Link href="/terms" >
              <span className="footer-text"> شرایط استفاده </span>
            </Link>
            <Link href="/about" className="px-3">
              <span className="footer-text"> درباره‌ی ما </span>
            </Link>
            <Link href="/projects" >
              <span className="footer-text"> پروژه‌های ما </span>
            </Link>
            <Link href="/resources" className="px-3">
              <span className="footer-text"> امکانات دیگر </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

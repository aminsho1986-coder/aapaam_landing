"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <>

      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>صفحه ای که دنبالش میگردید پیدا نشد</h2>
          <p>متاسفانه، صفحه ای که به دنبال آن هستید ممکن است در صورت تغییر نام حذف شده باشد یا به طور موقت در دسترس نباشد</p>
          <Link href={"/"} >
              <i className="fa-solid fa-home" style={{marginInlineEnd:"8px"}}></i>
              برگشت به خانه
          </Link>
        </div>
      </div>

    </>
  );
}


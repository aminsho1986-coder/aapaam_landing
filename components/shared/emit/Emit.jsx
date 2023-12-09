"use client";

import Link from "next/link";
import Image from "next/image";

import "./emit.scss";

export default function Emit({title}) {
  return (
    <section className="emit body-container">
      <span className="section-title">
        {title}
      </span>
      <div className="img-row">
        <Image
          src="/images/shared/four-blue-tree.png"
          alt=""
          width="250"
          height="113"
        />

        <Image src="/images/main/step1.png" alt="" width="80" height="132" />

        <Image
          src="/images/shared/four-blue-tree.png"
          alt=""
          width="250"
          height="113"
        />
      </div>
      <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/calculate/calculator`}>
        <button className="blue-light-button"> محاسبه </button>
      </Link>
    </section>
  );
}

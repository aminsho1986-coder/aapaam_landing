"use client";

import { useState } from "react";
import Image from "next/image";

import Nav from "../shared/nav/Nav";
import Offset from "../shared/offset/Offset";
import Emit from "../shared/emit/Emit";
import LifeStyle from "../shared/life-style/LifeStyle";
import BottomGray from "../shared/bottom-gray/BottomGray";
import Footer from "../shared/footer/Footer";

import styles from "./individual.module.scss";

export default function Individual() {
  const [offsetData] = useState([
    {
      mainImg: "/images/individual/item-offset-airplane.png",
      trees: [
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
      ],
      lightText: "3 ساعت پرواز",
      boldText: "قطع 5 درخت",
    },
    {
      mainImg: "/images/individual/item-offset-pizza.png",
      trees: ["/images/individual/item-offset-tree.png"],
      lightText: "یک پیتزا",
      boldText: "قطع یک درخت",
    },
    {
      mainImg: "/images/individual/item-offset-thunder.png",
      trees: [
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
      ],
      lightText: "میانگین انرژی هر شخص",
      boldText: "قطع سه درخت",
    },
  ]);
  const [lifeStyleData] = useState([
    {
      id: "1",
      img: "/images/individual/ind1.PNG",
    },
    {
      id: "2",
      img: "/images/individual/ind2.PNG",
    },
    {
      id: "3",
      img: "/images/individual/ind3.PNG",
    },
  ]);

  return (
    <>
      <Nav />
      {/* <!-- =========================START HEADER====================== --> */}
      <IndividualHeader />
      {/* <!-- =========================END HEADER====================== --> */}
      {/* <!-- =========================START OFFSET SECTION====================== --> */}
      <Offset data={offsetData} title={"آیا می‌دانستید، می‌توانید سهم کربن روزانه خود را جبران کنید؟"}/>
      {/* <!-- =========================END OFFSET SECTION====================== --> */}
      {/* <!-- =========================START EMIT SECTION====================== --> */}
      <Emit title={"آیا می‌دانستید، می‌توانید سهم کربن روزانه خود را جبران کنید؟"} />
      {/* <!-- =========================END EMIT SECTION====================== --> */}
      {/* <!-- =========================START LIFE STYLE SECTION====================== --> */}
      <LifeStyle data={lifeStyleData} />
      {/* <!-- =========================END LIFE STYLE SECTION====================== --> */}
      {/* <!-- =========================START GRAY SECTION====================== --> */}
      <BottomGray />
      {/* <!-- =========================END GRAY SECTION====================== --> */}
      {/* <!-- =========================START FOOTER====================== --> */}
      <Footer />
      {/* <!-- =========================END FOOTER====================== --> */}
    </>
  );
}

const IndividualHeader = () => {
  return (
    <header className={`${styles.header} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
      به‌طور میانگین هر فرد در سال 4.69 تن کربن در جو منتشر می‌کند
      </span>
      <span className={`${styles.sectionDescription} section-description`}>
      می‌ توانید با کمک آپام، سهم کربن خود را جبران کنید
      </span>
      
      <Image
        src="/images/individual/header.PNG"
        alt=""
        width="1050"
        height="495"
      />
    </header>
  );
};

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import Nav from "../shared/nav/Nav";
import Offset from "../shared/offset/Offset";
import Emit from "../shared/emit/Emit";
import BottomGray from "../shared/bottom-gray/BottomGray";
import LifeStyle from "../shared/life-style/LifeStyle";
import Footer from "../shared/footer/Footer";

import styles from "./event.module.scss";

export default function Event() {
  const [offsetData] = useState([
    {
      mainImg: "/images/event/traffic.png",
      trees: [
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
      ],
      lightText: "یک ساعت رانندگی 20 نفر",
      boldText: "قطع 3 درخت",
    },
    {
      mainImg: "/images/event/room-service.png",
      trees: [
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
      ],
      lightText: "پذیرایی برای 20 نفر",
      boldText: "قطع 2 درخت",
    },
    {
      mainImg: "/images/individual/item-offset-thunder.png",
      trees: [
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
        "/images/individual/item-offset-tree.png",
      ],
      lightText: "تامین انرژی 20 نفر",
      boldText: "قطع 3 درخت",
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
      {/* <!-- =====================START HEADER====================== --> */}
      <EventHeader />
      {/* <!-- =====================END HEADER====================== --> */}
      {/* <!-- =====================START OFFSET SECTION====================== --> */}
      {useMemo(() => {
        return <Offset data={offsetData} title={"آیا می‌دانید، از طریق پلتفرم آپام می‌توانید خیلی سریع ردپای کربن خود را جبران کنید؟"}/>;
      }, [offsetData])}
      {/* <!-- =====================END OFFSET SECTION====================== --> */}
      {/* <!-- =====================START EMIT SECTION====================== --> */}
      <Emit title={"کربن رویدادهای خود را با آپام جبران کنید!"}/>
      {/* <!-- =====================END EMIT SECTION====================== --> */}
      {/* <!-- =====================START LIFE STYLE SECTION====================== --> */}
      <LifeStyle data={lifeStyleData} />
      {/* <!-- =====================END LIFE STYLE SECTION====================== --> */}
      {/* <!-- =====================START GRAY SECTION====================== --> */}
      <BottomGray />
      {/* <!-- =====================END GRAY SECTION====================== --> */}
      {/* <!-- =====================START FOOTER====================== --> */}
      <Footer />
      {/* <!-- =====================END FOOTER====================== --> */}
    </>
  );
}

const EventHeader = () => {
  return (
    <header className={`${styles.header} body-container`}>
      <span className={`${styles.sectionTitle} section-title`}>
      آیا می‌دانید، یک رویداد با 20 نفر شرکت‌کننده چه میزان کربن منتشر می‌کند؟
      </span>
      <span className={`${styles.sectionDescription} section-description`}>
      انتشار رویدادی با ظرفیت 20 نفر، معادل 5 تن کربن می‌باشد
      </span>
      <Image
        src="/images/event/header-event.png"
        alt=""
        width="1050"
        height="495"
      />
    </header>
  );
};

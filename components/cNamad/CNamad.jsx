"use client";

import Image from "next/image";
import styles from "./cNamad.module.scss";
import Link from "next/link";


export default function CNamad({ serverStatus, serverData }) {


  return (
    <>
      <CNamadNav />
      <div className={styles.cNamadBody}>
        <div className={styles.cNamadBodyContent}>
          {
            serverStatus ? 
            <>
            <CNamadCompanyDetail data={serverData} />
            {
              serverData.activityType === "PRODUCTIVE" ?
              <CNamadCompanyProduct data={serverData}/>
              : null
            }
            <CNamadCompanyInvestments data={serverData} />

            <CNamadCompanyTrees data={serverData} />
            </>
            : 
            <div className={styles.error}>
              <h1>متاسفانه</h1>
              <h3>محتوای این صفحه برای شما قابل مشاهده نیست!</h3>
              <p>{serverData.message}</p>
            </div>
          }
          <CNamadCompanyExperience />
          <CNamadBottomImg />
        </div>
      </div>
    </>
  );
}

const CNamadNav = () => {
  return (
    <nav className={styles.cNamadNav}>
      <Link href="/">
        <Image
          src={"/images/main/top-logo.svg"}
          alt=""
          width="130"
          height="180"
        />
      </Link>
    </nav>
  );
};

const CNamadCompanyDetail = ({ data }) => {
  return (
    <div className="row w-100" style={{zIndex:"1000"}}>

      <div className="col-md-6">
        <div className={styles.companyDetail}>
          <span className={styles.cNamadTitle}>مشخصات :</span>
          <div className={styles.textsContainer}>
            <div className={styles.item}>
              <span className={styles.itemTitle}>نام کسب و کار:</span>
              <span className={styles.itemSubtitle}>{data.companyName}</span>
            </div>
            <div className={styles.item}>
              <span className={styles.itemTitle}>آدرس وب سایت:</span>
              <span className={styles.itemSubtitle}>{data.webSite ? data.webSite : "-"}</span>
            </div>
            <div className={styles.item}>
              <span className={styles.itemTitle}>مقدار کربن خریداری شده:</span>
              <span className={styles.itemSubtitle}>{data.carbonAmount} تن</span>
            </div>
            <div className={styles.item}>
              <span className={styles.itemTitle}>معادل درخت کاشته شده:</span>
              <span className={styles.itemSubtitle}>{data.trees.length} عدد</span>
            </div>
            <div className={styles.item}>
              <span className={styles.itemTitle}>تاریخ اعطای نماد:</span>
              <span className={styles.itemSubtitle}>
                {new Date(data.createLinkAt).toLocaleDateString("fa-ir", {
                  day: "numeric",
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
          <div className="row d-flex justify-content-center align-items-center">
            <div className={styles.earth}>
                <Image
                  src="/images/cNamad/earth.svg"
                  alt=""
                  width="150"
                  height="150"
                  // style={{paddingRight:`${100-data.percentage}%`}}
                  style={{paddingRight:`0%`}}
                />
                <Image
                  src="/images/cNamad/earth.svg"
                  alt=""
                  width="150"
                  height="150"
                />
              </div>
          </div>

          <div className="row d-flex justify-content-center mt-4">
            <div className={styles.containerStyles}>
              {/* <div className={styles.fillerStyles} style={{width:`${data.percentage}%`}}>
                <span className={styles.labelStyles}>{`${data.percentage}%`}</span>
              </div> */}
              <div className={styles.fillerStyles} style={{width:`100%`}}>
                <span className={styles.labelStyles}>100%</span>
              </div>
            </div>
          </div>
      </div>

    </div>
  );
};

const CNamadCompanyExperience = () => {
  return (
    <div className={styles.companyExperience}>
      <span className={`${styles.cNamadTitle} pe-4 pe-md-0`}> درباره ی این نماد : </span>
      <span className={`${styles.cNamadDescription} px-5 px-md-0`}>
      نماد کربن صفر به اين معني است كه صاحب یک کسب و کار یا برگزارکننده ی یک رویداد با ارزيابي و اقدام موثر، گازهاى گلخانه اي منتشر شده را خنثي نموده است.
      <br/>
      این نماد ماحصل اقدامات‌ موثرى است که برای کاهش اثرات منفی خود بر محیط زیست انجام شده است.
      </span>
    </div>
  );
};

const CNamadCompanyProduct = ({ data }) => {
  return (
    <div className={styles.companyInvestments}>
      <span className={styles.cNamadTitle}> محصولات : </span>
      <div className="container">
        <div className={styles.tableContainer}>
          <div className={styles.subjects} >
            <div className={styles.name}>
              <span> نام محصول </span>
            </div> 
            <div className={styles.need}>
              <span> کربن مورد نیاز (تن) </span>
            </div>
            <div className={styles.offset}>
              <span> کربن جبران شده (تن) </span>
            </div>
          </div>

          {data.products ? data.products.map((product) => {
            return (
              <div className={styles.tableItem} key={product._id}>
                <div className={styles.name}>
                  <span>{product.name}</span>
                </div>
                <div className={styles.need}>
                  <span>{product.productCarbon}</span>
                </div>
                <div className={styles.offset}>
                  <span>{product.buyCarbonProduct}</span>
                </div>
              </div>
            );
          }) : null}
        </div>
      </div>
    </div>
  );
};

const CNamadCompanyInvestments = ({ data }) => {
  return (
    <div className={styles.companyInvestments}>
      <span className={styles.cNamadTitle}> سرمایه گذاری ها : </span>
      <div className={styles.projectsContainer}>
        {data.projects ? data.projects.map((project) => {
          return (
            <Link href={`/projects/${project.project.slug}`} target="_blank" key={project._id}>
              <div className={styles.projectItem}>
                <div className={styles.itemContent}>
                  <Image
                    className={styles.mainImg}
                    src={
                      process.env.NEXT_PUBLIC_BASE_URL_IMAGES +
                      project.project.images[0]
                    }
                    alt=""
                    width="380"
                    height="160"
                    priority
                  />
                  <div className={styles.title}>
                    <span>{project.project.title}</span>
                  </div>
                  <div className={styles.species}>
                    <span>نوع گونه:</span>
                    <span>{project.project.species.name}</span>
                  </div>
                  <div className={styles.link}>
                    <Link href={`/projects/${project.project.slug}`} target="_blank" > جزییات پروژه </Link>
                  </div>
                </div>
              </div>
            </Link>
          );
        }) : null}
      </div>
    </div>
  );
};

const CNamadCompanyTrees = ({ data }) => {
  console.log(data.trees)
  return (
    <div className={styles.companyInvestments}>
      <span className={`${styles.cNamadTitle} pe-4 pe-md-0`}> درختان : </span>
      <div className="row w-100 pe-4 pe-md-0">
        <p className={styles.trees}> شامل {data.trees.length} عدد درخت به کد های : </p>
      </div>
      <div className="row w-100 pe-4 pe-md-0">
        {data.trees ? data.trees.map((tree) => {
            return (
              <div className='col-2 col-md-1' key={tree._id}>
                <span className={styles.tree}> {tree.code} </span>
              </div>
            );
          }) : null} 
      </div>
    </div>
  );
};

const CNamadBottomImg = () => {
  return (
    <div className={styles.bottomImg}>
      <Image
        className={styles.mainImg}
        src="/images/cNamad/cNamad.png"
        alt=""
        width="860"
        height="520"
      />
    </div>
  );
};

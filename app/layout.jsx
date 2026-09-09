import "@/public/styles/main.scss";
import { headers } from "next/dist/client/components/headers";
import Script from "next/script";


export async function generateMetadata({ params }) {

  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";

  const PagesData = {
    "/":{
      title:
        "آپام | پلتفرم ارزیابی و جبران انتشار کربن",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
    "/about":{
      title:
        "آپام | درباره ما",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
    "/carbon-certification":{
      title:
        "آپام | گواهی کربن",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
    "/company":{
      title:
        "آپام | شرکت ها",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
    "/event":{
      title:
        "آپام | رویداد ها",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
    "/individual":{
      title:
        "آپام | اشخاص",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },

    "/projects":{
      title:
        "آپام | پروژه ها",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
    "/projects/":{
      title:
        "آپام | پروژه",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
    "/resources":{
      title:
        "آپام | امکانات",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
    "default":{
      title:
      "آپام | پلتفرم ارزیابی و جبران انتشار کربن",
      description:
      "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
    },
  }

  const mainData = {
    generator: "aapaam.net",
    applicationName: "آپام",
    referrer: "origin-when-cross-origin",
    keywords: [
      "کربن",
      "انتشار کربن",
      "ارزیابی انتشار کربن",
      "جبران انتشار کربن",
      "خرید و فروش اعتبار کربن",
      "آپام",
      "پروژه های محیط زیستی",
      "جنگلکاری",

    ],
    authors: [{ name: "aapaam" }],
    colorScheme: "light",
    themeColor: "#fff",
    creator: "aapaam",
    publisher: "aapaam",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://aapaam.net"),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title:
        "آپام | پلتفرم ارزیابی و جبران انتشار کربن",
      description:
        "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
      url: pathname,
      siteName: "آپام",
      images: [
        {
          url: "https://aapaam.net/images/main/main-logo.svg",
          width: 800,
          height: 200,
        },
      ],
      locale: "fa_IR",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: "summary_large_image",
      title: "آپام پلتفرم ارزیابی و جبران انتشار کربن | خرید و فروش اعتبار کربن",
      description: "ارزیابی و جبران میزان انتشار کربن و خرید و فروش اعتبار در بازار کربن",
      creator: "آپام",
      images: ["https://aapaam.net/images/main/main-logo.svg"],
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  };

  if (pathname.startsWith("/projects/")) {
    mainData.title = PagesData["/projects/"].title;
    mainData.description = PagesData["/projects/"].description;
    mainData.openGraph.title = PagesData["/projects/"].title;
    mainData.openGraph.description = PagesData["/projects/"].description;
    mainData.twitter.title = PagesData["/projects/"].title;
    mainData.twitter.description = PagesData["/projects/"].description;
    return mainData;
  }
  if ((PagesData[pathname] && PagesData[pathname].title) || pathname === "/") {
    mainData.title = PagesData[pathname].title;
    mainData.description = PagesData[pathname].description;
    mainData.openGraph.title = PagesData[pathname].title;
    mainData.openGraph.description = PagesData[pathname].description;
    mainData.twitter.title = PagesData[pathname].title;
    mainData.twitter.description = PagesData[pathname].description;
  } else {
    mainData.title = PagesData["default"].title;
    mainData.description = PagesData["default"].description;
    mainData.openGraph.title = PagesData["default"].title;
    mainData.openGraph.description = PagesData["default"].description;
    mainData.twitter.title = PagesData["default"].title;
    mainData.twitter.description = PagesData["default"].description;
  }

  return mainData;
}


export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
      </head>
      <body>
        <ul className="notifications"></ul>
        {children}
      </body>
      <Script src="/scripts/fontAwesome.js" />
    </html>
  );
}

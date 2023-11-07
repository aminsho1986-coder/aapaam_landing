import "@/public/styles/main.scss";
import Script from "next/script";

export const metadata = {
  title: "آپام",
  description: "پلتفرم جبران انتشار کربن",
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

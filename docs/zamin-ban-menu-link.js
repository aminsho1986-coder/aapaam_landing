// ============================================================
// منوی اتصال: زمین بان → سکوی شرکت‌ها (آپام)
// این کد را در منوی اپلیکیشن زمین بان اضافه کنید
// ============================================================

// --- گزینه ۱: لینک ساده (HTML) ---
// در منوی زمین بان این مورد را اضافه کنید:
//
// <a href="https://aapaam.net/company">سکوی شرکت‌ها</a>

// --- گزینه ۲: کامپوننت React ---
// اگر زمین بان با React/Next.js ساخته شده:
//
// import Link from "next/link"; // یا import { Link } from "react-router-dom";
//
// <Link href="https://aapaam.net/company">سکوی شرکت‌ها</Link>

// --- گزینه ۳: با آیکن (React + Next.js) ---
//
// export function CompaniesPlatformLink() {
//   return (
//     <Link href="https://aapaam.net/company">
//       <span>سکوی شرکت‌ها</span>
//     </Link>
//   );
// }

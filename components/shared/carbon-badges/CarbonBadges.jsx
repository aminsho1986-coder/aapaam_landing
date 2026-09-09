"use client";

import styles from "./carbonBadges.module.scss";

const badgesData = [
  {
    hexLabelTop: "کربن",
    hexLabelBottom: "صفر",
    subLabel: "محصولات/خدمات کربن صفر",
    value: "۱۲,۸۵۶",
    unit: "جبران (تن کربن)",
  },
  {
    hexLabelTop: "کربن",
    hexLabelBottom: "صفر",
    subLabel: "کسب‌وکار کربن صفر",
    value: "۸,۴۳۰",
    unit: "جبران (تن کربن)",
  },
  {
    hexLabelTop: "ارزیابی",
    hexLabelBottom: "کربن",
    subLabel: "ارزیابی سالانه ردپای کربن",
    value: "۱۵,۲۰۰",
    unit: "انتشار (تن کربن)",
  },
];

export default function CarbonBadges() {
  return (
    <section className={`${styles.section} body-container`}>
      <span className={`${styles.title} section-title`}>
        پس از ارزیابی، جبران و تأیید، نمادهای زیر برای کسب‌وکار شما صادر می‌شود
      </span>
      <div className={styles.badgesRow}>
        {badgesData.map((badge, index) => (
          <div className={styles.badgeItem} key={index}>
            <div className={styles.hexagon}>
              <div className={styles.hexagonInner}>
                <TreeIcon />
                <span className={styles.hexLabel}>{badge.hexLabelTop}</span>
                <span className={styles.hexLabel}>{badge.hexLabelBottom}</span>
              </div>
            </div>
            <span className={styles.subLabel}>{badge.subLabel}</span>
            <span className={styles.value}>{badge.value}</span>
            <span className={styles.unit}>{badge.unit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const TreeIcon = () => {
  return (
    <svg
      className={styles.treeIcon}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* trunk */}
      <rect x="22" y="28" width="4" height="16" rx="1" fill="#849340" />
      {/* bottom bar (widest) */}
      <rect x="8" y="26" width="32" height="4" rx="2" fill="#849340" />
      {/* middle bar */}
      <rect x="12" y="18" width="24" height="4" rx="2" fill="#849340" />
      {/* top bar (narrowest) */}
      <rect x="16" y="10" width="16" height="4" rx="2" fill="#849340" />
    </svg>
  );
};

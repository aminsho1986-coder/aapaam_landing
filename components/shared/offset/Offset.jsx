"use client";

import Image from "next/image";

import "./offset.scss";

export default function Offset({ data, title }) {
  return (
    <section className="offset body-container">
      <span className="section-title">
        {title}
      </span>
      <div className="offset-row">
        {data.map((item) => {
          return (
            <div key={item.lightText} className="offset-item">
              <div className="main-img">
                <Image
                  className="main-img"
                  src={item.mainImg}
                  width="120"
                  height="120"
                  alt=""
                />
              </div>
              {/* <div className="tree-row">
                {item.trees.map((tree) => {
                  return (
                    <Image
                      src={tree}
                      alt=""
                      width="30"
                      height="46"
                      key={tree}
                    />
                  );
                })}
              </div> */}
              <span className="light-text">{item.lightText}</span>
              <span className="bold-text">=</span>
              <span className="bold-text">{item.boldText}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

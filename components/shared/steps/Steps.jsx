"use client";

import Image from "next/image";

import "./steps.scss";

export default function Steps({ data }) {
  return (
    <section className="section-steps body-container">
      <span className="section-title">{data.title}</span>
      <span className="section-description">{data.subtitle}</span>
      <div className="steps-timeline-container">
        <div className="img-row">
          {data.stepsData.map((item) => {
            return (
              <div onClick={item.onClick} key={item.id}>
                <div className="container-img">
                  <Image
                    src={item.img}
                    alt=""
                    width={item.imgWidth.toString()}
                    height={item.imgHeight.toString()}
                  />
                  <span>
                    {item.firstString}
                    <br />
                    {item.secondString}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-row">
          {data.stepsData.map((item) => {
            return (
              <div className="container-text" key={item.id}>
                <div onClick={item.onClick}>
                  <span>
                    {item.firstString}
                    <br />
                    {item.secondString}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="square-row">
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
        </div>
        <div className="square-row2">
          {/* <div className="blue-triangle"></div>
          <div className="blue-triangle"></div>
          <div className="blue-triangle"></div> */}
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

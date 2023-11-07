"use client";

import { useRef, useState } from "react";

import fetching from "@/hooks/Fetching";
import apiList from "@/hooks/fetchData";

import useToast from "@/hooks/toast/toast";
import validateEmail from "@/hooks/validates/email";

import LoadingButton from "@/components/common/loadingButton/LoadingButton";

import "./help.scss";

export default function Help() {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const { makeWarningToast, makeSuccessToast, makeErrorToast } = useToast();

  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const emailRef = useRef(null);
  const questionRef = useRef(null);

  let onEmailClick = () => {
    emailRef.current.focus();
  };
  let onQuestionClick = () => {
    questionRef.current.focus();
  };

  let onsubmitClick = () => {
    if (validateEmail(email)) {
      if (question !== "") {
        setIsButtonLoading(true);
        fetching(apiList.addContact, {}, { email: email, message: question })
          .then((res) => {
            return {
              success: res.ok,
              data: res.json(),
            };
          })
          .then((res) => {
            res.data.then((resJson) => {
              if (res.success) {
                makeSuccessToast(resJson.message);
              } else {
                makeErrorToast(resJson.message);
              }
            });
          })
          .catch((er) => {})
          .finally(() => {
            setIsButtonLoading(false);
            setEmail("");
            setQuestion("");
          });
      } else {
        makeWarningToast("سوال خود را وارد کنید");
      }
    } else {
      makeWarningToast("ایمیل خو را بصورت صحیح وارد کنید");
    }
  };

  return (
    <section className="help body-container">
      <span className="section-title" style={{marginBottom:"40px"}}> کمک لازم دارید؟ </span>
      <div className="bottom-container">
        <div className="left">
          <span className="title"> خوشحال میشیم از شما بشنویم </span>
          <span className="subtitle">سوالات و نظرات خود را، <br></br> با ما به اشتراک بزارید</span>
        </div>
        <div className="right">
          <div className="input-group">
            <input
              type="text"
              name=""
              id="text1"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
            <label onClick={onEmailClick}> ایمیل خود را وارد کنید ... </label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name=""
              id="text2"
              placeholder=""
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              ref={questionRef}
            />
            <label onClick={onQuestionClick}> سوال خود را بپرسید ... </label>
          </div>
          {/* <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select> */}
          <LoadingButton
            onButtonClick={onsubmitClick}
            buttonClass="blue-light-button"
            isLoading={isButtonLoading}
            dotsColor="#FAFAFA"
          >
            ثبت
          </LoadingButton>
        </div>
      </div>
    </section>
  );
}

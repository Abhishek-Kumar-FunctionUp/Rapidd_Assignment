import React, { useState } from "react";
import style from "./Navbar.module.css";
import navImg from "../../asset/navImg.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showHam, setShowHam] = useState(true);

  function handleOption() {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <div className={style.main}>
      <div className={style.navLeft}></div>
      <div className={style.navRight}>
        <p onClick={handleOption}>Ipsum</p>
        <p onClick={handleOption}>Ipsum</p>
        <p onClick={handleOption}>Ipsum</p>
        <p onClick={handleOption}>Ipsum</p>
      </div>
      {show ? (
        <div className={style.optionsContainer}>
          <div className={style.optionsLink}>
            <div className={style.options}>
              <p className={style.optionsHeading}>Ipsum Lorem</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
            </div>
            <div className={style.options}>
              <p className={style.optionsHeading}>Ipsum Lorem</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={style.ham}>
        {showHam ? (
          <AiOutlineMenu onClick={() => setShowHam(false)} />
        ) : (
          <AiOutlineClose onClick={() => setShowHam(true)} />
        )}
      </div>
      {!showHam ? (
        <div className={style.optionsContainer}>
          <div className={style.optionsLink}>
            <div className={style.options}>
              <p className={style.optionsHeading}>Ipsum Lorem</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
            </div>
            <div className={style.options}>
              <p className={style.optionsHeading}>Ipsum Lorem</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

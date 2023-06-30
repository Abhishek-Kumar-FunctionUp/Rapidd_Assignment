import React from "react";
import style from "./Footer.module.css";
import { BsCart2 } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={style.main}>
      <div className={style.top}>
        <div className={style.heading}>
          <p>Illum magnam aliquam</p>
          <p>Quia so minima</p>
          <p>Quia so minima</p>
        </div>
        <div className={style.lorem}>
          <div className={style.loremText}>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
          </div>
          <div className={style.loremText}>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
          </div>
          <div className={style.loremText}>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
          </div>
          <div className={style.loremText}>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
            <p>Ipsum Lorem</p>
          </div>
          <div className={style.loremTextCart}>
            <p>
              <BsCart2 />
              Lorem
            </p>
            <p>
              <BsCart2 />
              Lorem
            </p>
            <p>
              <BsCart2 />
              Lorem
            </p>
            <p>
              <BsCart2 />
              Lorem
            </p>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <p className={style.bottomHeading}>Minima ad for vitae sit</p>
        <p className={style.bottomText}>Numquam. Esse aliquip do, magni</p>
        <p className={style.bottomText}>
          Aut proident and valuptate sunt quisquam so voluptate nema
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { cardData } from "../../../asset/const";
import style from "./Officia.module.css";

export default function Officia() {
  return (
    <div className={style.main}>
      <div className={style.title}>
        <p>Officia ut</p>
        <a href="">Ipsum Lorem</a>
      </div>
      <div className={style.cardContainer}>
        {cardData.map((e) => (
          <div className={style.card}>
            <img src={e.img} alt="mountain" />
            <div className={style.bottom}>
              <p>{e.text}</p>
              {e.button}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

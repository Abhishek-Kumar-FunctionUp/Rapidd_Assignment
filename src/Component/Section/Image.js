import React from "react";
import style from "./Image.module.css";

export default function Image() {
  return (
    <div className={style.imageSection}>
      <div className={style.imageSectionLeft}>
        <img
          src="https://s2982.pcdn.co/wp-content/uploads/2020/02/iceland-feature-640x340-1.jpg.webp"
          alt="mountain"
          width="100%"
        />
        <div className={style.imageSectionLink}>
          <p>
            <BiLink className={style.icons} /> Ipsum Lorem
          </p>
          <p>
            <BiLink className={style.icons} /> Ipsum Lorem
          </p>
          <p>
            <BiLink className={style.icons} /> Ipsum Lorem
          </p>
        </div>
      </div>
      <div className={style.imageSectionRight}>
        <div className={style.imageSectionRightTop}>
          <p className={style.imageSectionRightTopText}>
            Numquam. <span>Esse aliquip do, magni.</span>
          </p>
          <p className={style.imageSectionRightMiddleText}>
            Minima ad for vitae sit
          </p>
          <a href="">Ipsum Lorem</a>
        </div>
        <div className={style.imageRight}>
          <img
            width="100%"
            src="https://imgur.com/98JfFI7.jpg"
            alt="mountain"
          />
          <div className={style.imageSectionRightBottom}>
            <button>
              <BiLink className={style.icons} /> Ipsum Lorem
            </button>
            <p>Adipisicing unde vel so dolore, consequatur.</p>
            <a href="">Ipsum Lorem</a>
          </div>
        </div>
      </div>
    </div>
  );
}

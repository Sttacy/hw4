import React from 'react'
import style from "../style/filmInfo.module.css"

export default function FilmInfo(props) {
    const {filmName, author , year, image} = props
  return (
    <div className={style.card}>
    < div className={style.card_img}><img src={image} alt="" /></div>
    <div className={style.card_title}>{filmName}</div>
    <div className={style.card_subtitle}>{author}</div>
    <hr className={style.card_divider}></hr>
    <div className={style.card_footer}>
        <div className={style.card_price}>{year}</div>
    </div>
</div>
  )
}

import style from "./style.module.css";

export default function Card({ title, price, img }) {
  return (
    <li className={style.card}>
      <div className={style.cardImgContainer}>
        <img className={style.cardImg} src={img} alt="product image" />
      </div>
      <div className={style.cardDetail}>
        <span>{title}</span>
        <span>{price}$</span>
      </div>
    </li>
  );
}

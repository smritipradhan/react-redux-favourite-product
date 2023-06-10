import React from "react";
import styles from "./Card.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Card = ({ productItem }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productiImage}>
        <img src={productItem.image} alt="homelander" />
      </div>
      <div className={styles.productName}>{productItem.name}</div>
      <div className={styles.priceFavourite}>
        <div className={styles.price}>{productItem.price}</div>
        <div>
          {productItem?.isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>

      {/* <div className={styles.description}>{productItem.description}</div> */}
    </div>
  );
};

export default Card;

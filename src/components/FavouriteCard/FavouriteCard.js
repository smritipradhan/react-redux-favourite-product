import React from "react";
import styles from "./FavouriteCard.module.scss";
import { productAction } from "../../store/productSlice";
import { useDispatch } from "react-redux";

const FavouriteCard = ({ productItem }) => {
  const dispatch = useDispatch();
  const removeFromFavourite = () => {
    dispatch(productAction.removeFavourite(productItem.id));
  };

  return (
    <div className={styles.productItem}>
      <div className={styles.productiImage}>
        <img src={productItem.image} alt="homelander" />
      </div>
      <div className={styles.productName}>{productItem.name}</div>
      <div className={styles.priceFavourite}>
        <div className={styles.price}>{productItem.price}</div>
        <div className={styles.removeButton}>
          <button onClick={removeFromFavourite}>Remove from Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;

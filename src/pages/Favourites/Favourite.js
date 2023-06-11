import React from "react";
import { useSelector } from "react-redux";
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";
import styles from "./Favourite.module.scss";

const Favourite = () => {
  const products = useSelector((state) => state.product.product);
  const favouriteProducts = products.filter((products) => products.isFavourite);
  const isFavouriteEmpty = favouriteProducts.length;
  return (
    <div className={styles.favouriteContainer}>
      {isFavouriteEmpty === 0 ? (
        <div className={styles.noFavouriteProductsFoound}>
          No Favourite Products Found
        </div>
      ) : (
        favouriteProducts.map((favouriteProduct) => (
          <FavouriteCard productItem={favouriteProduct} />
        ))
      )}
    </div>
  );
};

export default Favourite;

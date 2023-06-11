import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Products.module.scss";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.product.product);

  return (
    <div className={styles.productContainer}>
      {products.map((productItem) => {
        return <Card productItem={productItem} />;
      })}
    </div>
  );
};

export default Products;

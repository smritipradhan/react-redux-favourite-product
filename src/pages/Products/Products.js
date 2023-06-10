import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Products.module.scss";
import homelander from "./../../assets/homelander.jpg";
import starlight from "./../../assets/starlight.jpg";
import billy from "./../../assets/billy.jpeg";
import atrain from "./../../assets/atrain.jpeg";

import deep from "./../../assets/deep.webp";
import { useSelector } from "react-redux";

const products = [
  {
    name: "Homelander",
    id: "p1",
    isFavourite: false,
    price: "$20",
    image: homelander,
    description:
      "he Homelander is a patriotic superhero who leads the superhero team, The Seven, and the most powerful superhuman created by Vought-American. ",
  },
  {
    name: "Starlight",
    id: "p1",
    isFavourite: true,
    price: "$20",
    image: starlight,
    description:
      "Starlight. She has the ability to emit blinding light from her hands and also the ability to fly.",
  },
  {
    name: "Billy",
    id: "p1",
    isFavourite: false,
    price: "$90",
    image: billy,
    description:
      "He is the leader of the eponymous team of vigilantes who are bent on taking down Vought and the Seven by whatever means necessary.",
  },
  {
    name: "A Train",
    id: "p1",
    isFavourite: false,
    price: "$10",
    image: atrain,
    description:
      "He is a speedster who used to be a part of a team known as Teenage Kix but became a member of the Seven to replace their previous speedster.",
  },
  {
    name: "Deep",
    id: "p1",
    isFavourite: true,
    price: "$30",
    image: deep,
    description:
      "The Deep is able to psychically communicate with all forms of sea creatures, even having full conversations with them.",
  },
];

const Products = () => {
  const products = useSelector((state) => state.product.products);
  console.log("products", products);
  return (
    <div className={styles.productContainer}>
      {products.map((productItem) => {
        return <Card productItem={productItem} />;
      })}
    </div>
  );
};

export default Products;

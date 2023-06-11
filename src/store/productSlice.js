import homelander from "./../assets/homelander.jpg";
import starlight from "./../assets/starlight.jpg";
import billy from "./../assets/billy.jpeg";
import atrain from "./../assets/atrain.jpeg";
import deep from "./../assets/deep.webp";
import lamplighter from "./../assets/lamplighter.jpeg";
import theboys from "./../assets/theboys.webp";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [
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
      id: "p2",
      isFavourite: true,
      price: "$20",
      image: starlight,
      description:
        "Starlight. She has the ability to emit blinding light from her hands and also the ability to fly.",
    },
    {
      name: "Billy",
      id: "p3",
      isFavourite: false,
      price: "$90",
      image: billy,
      description:
        "He is the leader of the eponymous team of vigilantes who are bent on taking down Vought and the Seven by whatever means necessary.",
    },
    {
      name: "A Train",
      id: "p4",
      isFavourite: false,
      price: "$10",
      image: atrain,
      description:
        "He is a speedster who used to be a part of a team known as Teenage Kix but became a member of the Seven to replace their previous speedster.",
    },
    {
      name: "Deep",
      id: "p5",
      isFavourite: true,
      price: "$30",
      image: deep,
      description:
        "The Deep is able to psychically communicate with all forms of sea creatures, even having full conversations with them.",
    },
    {
      name: "LampLighter",
      id: "p6",
      isFavourite: false,
      price: "$30",
      image: lamplighter,
      description: "",
    },
    {
      name: "The Boys",
      id: "p7",
      isFavourite: false,
      price: "$30",
      image: theboys,
      description: "",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const productIndex = state.product.findIndex(
        (p) => p.id === action.payload
      );
      let favouriteStatus = !state.product[productIndex].isFavourite;
      const updatedProducts = [...state.product];
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        isFavourite: favouriteStatus,
      };

      state.product = updatedProducts;
    },
    removeFavourite: (state, action) => {
      const productIndex = state.product.findIndex(
        (p) => p.id === action.payload
      );
      let favouriteStatus = false;
      const updatedProducts = [...state.product];
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        isFavourite: favouriteStatus,
      };
      state.product = updatedProducts;
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;

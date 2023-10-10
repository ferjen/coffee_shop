/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { AddOrderItem } from "~/components/AddOrderItem";
import Cards from "~/components/Cards";
import Cart from "~/components/Cart";
import Checkout from "~/components/Checkout";
import NavBar from "~/components/NavBar";

function CoffeeShop() {
  const { data: sessionData } = useSession();

  console.log(sessionData?.user);
  const cardsData = [
    {
      title: "Espresso",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "espresso.jpeg",
      price: 90,
    },
    {
      title: "Americano",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "americano.jpeg",
      price: 90,
    },
    {
      title: "Latte",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "latte.jpeg",
      price: 90,
    },

    {
      title: "Matcha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "matcha.jpeg",
      price: 120,
    },

    {
      title: "Hot Chocolate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "chocolate.jpeg",
      price: 60,
    },

    {
      title: "Mocha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "mocha.jpeg",
      price: 90,
    },
  ];
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Adds an item to the cart.
  const addToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Removes an item from the cart.
  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <div>
      <NavBar />
      <Cards cards={cardsData} addToCart={addToCart} />
      <Cart items={cartItems} removeFromCart={removeFromCart} />
      <Checkout items={cartItems} />
    </div>
  );
}

export default CoffeeShop;

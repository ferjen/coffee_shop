/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Cards from "~/components/Cards";
import Cart from "~/components/Cart";
import Checkout from "~/components/Checkout";
import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";

function CoffeeShop() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const {data:coffee, isLoading,isError} = api.coffee.getAllCoffee.useQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading orders.</div>;
  }
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
      <Cards cards={coffee} addToCart={addToCart} />
      <Cart items={cartItems} removeFromCart={removeFromCart} />
      <Checkout items={cartItems} />
    </div>
  );
}

export default CoffeeShop;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Card {
  id:string,
  name: string;
  description: string | null;
  imageUrl: string;
  price: number;
}

interface Props {
  cards: Card[];
  addToCart: (item: { name: string; price: number; quantity: number }) => void;
}

const Cards: React.FC<Props> = ({ cards, addToCart }) => {
  //State hook that initializes an array of quantities with the same length as the cards array, and fills it with zeros.
  const [quantities, setQuantities] = useState<number[]>(
    Array(cards.length).fill(0),
  );

  const handleAddToCart = (index: number) => {
    if (quantities[index] ?? (0 > 0 && cards[index])) {
      const { name, price } = cards[index]!;
      addToCart({
        name: name,
        price: price,
        quantity: quantities[index] ?? 0,
      });
    }
  };

  const handleIncrement = (index: number) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities[index] = (updatedQuantities[index] ?? 0) + 1;
      return updatedQuantities;
    });
  };

  const handleDecrement = (index: number) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities[index] = Math.max(
        0,
        (updatedQuantities[index] ?? 0) - 1,
      );
      return updatedQuantities;
    });
  };

  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-sm overflow-hidden rounded shadow-lg"
          >
            <img className="h-64 w-full" src={card.imageUrl} alt={card.name} />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">{card.name}</div>
              <p className="text-base text-gray-700">{card.description}</p>
              <p className="mt-2 text-lg font-bold text-gray-700">
                ₱{card.price}
              </p>
              <div className="mt-4 flex w-28 items-center justify-between rounded-lg">
                <button
                  className="ml-2 p-2"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-12 text-center"
                  value={quantities[index]}
                  readOnly
                />
                <button
                  className="mr-2 p-2"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </button>
              </div>

              <div className="mt-4 flex">
                <button
                  className="flex items-center rounded-lg bg-yellow-900 px-4 py-2 text-white"
                  onClick={() => handleAddToCart(index)}
                >
                  <AiOutlineShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

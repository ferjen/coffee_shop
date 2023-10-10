/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { api } from "~/utils/api";


interface CartProps {
  items: { name: string; price: number; quantity: number }[];
  removeFromCart: (index: number) => void;
}

function Cart({ items, removeFromCart }: CartProps) {
  // Calculates the total price of all items in the cart.
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const {mutate} = api.orderItem.addOrderItem.useMutation()

  return (
    <div>
      
      <h2 className="mb-4 ml-32 mt-20 text-4xl font-bold">Cart</h2>
      <div className="relative mx-32 mb-10 overflow-x-auto shadow-lg">
        <table className="w-full text-left text-lg text-gray-900">
          <thead className="bg-yellow-900 text-lg uppercase text-white">
            <tr>
              <th
                scope="col"
                className="border border-gray-800 px-6 py-3 text-center"
              >
                Order
              </th>
              <th
                scope="col"
                className="border border-gray-800 px-6 py-3 text-center"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="border border-gray-800 px-6 py-3 text-center"
              >
                Price
              </th>
              <th
                scope="col"
                className="border border-gray-800 px-6 py-3 text-center"
              >
                <span className="rounded-lg ">Remove</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-800 py-2 text-center">
                  {item.name}
                </td>
                <td className="border border-gray-800 py-2 text-center">
                  {item.quantity}
                </td>
                <td className="border border-gray-800 py-2 text-center">
                  ₱{(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="border border-gray-800 py-2 text-center">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="rounded-lg border border-gray-800 bg-red-700 px-2 py-2 text-center text-white"
                  >
                    {" "}
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border border-gray-800 text-center">
              <td colSpan={2} className="p-3">
                {" "}
                Total:
              </td>
              <td>₱{totalPrice.toFixed(2)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <button
  className="text-medium mb-10 ml-32 rounded bg-yellow-900 px-16 py-3 font-bold uppercase text-white"
  type="button"
  onClick={(e) => {
    e.preventDefault();
    items.forEach((item, index) => {
      setTimeout(() => {
        mutate({
          order: {
            connect: {
              orderCode: "123asd",
            },
          },
          coffeeName: item.name,
          price: item.price,
          quantity: item.quantity,
          orderCode: "123asd",
        });
      }, index * 500); // Delay in milliseconds (e.g., 1000ms = 1 second)
    });

}}
>
  Add Order
</button>
    </div>
  );
}

export default Cart;

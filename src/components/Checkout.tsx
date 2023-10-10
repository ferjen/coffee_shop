/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";
import {  orderCodeGenerator } from "./randomCodeGen";

interface CheckoutProps {
  items: { name: string; price: number; quantity: number }[];
}

const Checkout: React.FC<CheckoutProps> = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  // const [payment, setPayment] = useState("");

  const orderCode =  orderCodeGenerator();
  const [total, setTotalAmount] = useState<number>(0); // Initialize totalAmount to 0
  const {mutate} = api.order.createOrder.useMutation()
  const addItems = api.orderItem.addOrderItem.useMutation(); 
  useEffect(() => {
    // Calculate the total amount from the items in the cart
    const calculatedTotalAmount = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    setTotalAmount(calculatedTotalAmount);
  }, [items]);

  // const handlePayment = () => {
  //   // Handle payment submission here
  //   // You can access the input values in the name, email, address, and payment variables.
  //   const data = {
  //     name,
  //     contact,
  //     address,
  //     payment,
  //     items,
  //     total
  //   };
  //   console.log(data)

  //   // Close the modal after handling payment
  //   setShowModal(false);
  // };

  return (
    <>
      <button
        className="text-medium mb-10 ml-32 rounded bg-yellow-900 px-16 py-3 font-bold uppercase text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Checkout
      </button>

      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="relative mx-auto max-h-screen w-auto">
            <div className="o relative mx-20 flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
              <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                <h3 className="text-3xl font-semibold">Payment Details</h3>
                <button
                  className="float-right ml-auto border-0 p-1 text-3xl font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-2xl text-black">x</span>
                </button>
              </div>

              {/* Body */}
              <div className="relative flex-auto p-6">
                <label className="mb-4 block">
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded border p-2"
                  />
                </label>
                <label className="mb-4 block">
                  Contact
                  <input
                    type="string"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full rounded border p-2"
                  />
                </label>
                <label className="mb-4 block">
                  Address:
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded border p-2"
                  />
                </label>
              
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
                      </tr>
                    ))}
                  </tbody>
                </table>
                <label className="mb-4 mt-4 block">
                  Total Price:{" "}
                  <strong className="font-bold">
                    ₱{total.toFixed(2)}
                  </strong>
                </label>
              </div>

              {/* Footer */}
              <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                <button
                  className="mb-1 mr-1 rounded bg-blue-700 px-6 py-2 uppercase text-white"
                  type="button"
                  onClick={(e)=>{
                    e.preventDefault();
                    setShowModal(false);
                    console.log(orderCode);
                    mutate({
                      name, contact, address, orderCode,total
                    });
                  
                    // Insert a delay here
                    setTimeout(() => {
                      items.forEach((item, index) => {
                        setTimeout(() => {
                          addItems.mutate({
                            order: {
                              connect: {
                                orderCode: orderCode,
                              },
                            },
                            coffeeName: item.name,
                            price: item.price,
                            quantity: item.quantity,
                            orderCode: orderCode,
                          });
                        }, index * 500); // Delay in milliseconds (e.g., 1000ms = 1 second)
                      });
                    }, 500); // 2000ms = 2 seconds delay
                  }}
                  
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Checkout;

import React, { useState } from "react";

const Checkout = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const handlePayment = () => {
    // Handle payment submission here
    // You can access the input values in the name, email, address, and payment variables.
    console.log(name, email, address, payment);

    // Close the modal after handling payment
    setShowModal(false);
  };

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
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-5xl">
              <div className="relative mx-20 flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
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
                    Email:
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                  <label className="mb-4 block">
                    Payment Amount:
                    <input
                      type="number"
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                      className="w-full rounded border p-2"
                    />
                  </label>
                </div>

                {/* Footer */}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="mb-1 mr-1 rounded bg-blue-700 px-6 py-2 uppercase text-white"
                    type="button"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Checkout;

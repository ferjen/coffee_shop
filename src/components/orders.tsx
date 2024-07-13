import React from "react";
import { api } from "~/utils/api";
import NavBar from "./NavBar";

const Orders = () => {
  const { data: orders, isLoading, isError } = api.order.getAllOrder.useQuery();
  const {mutate} = api.order.toggleOrderDone.useMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading orders.</div>;
  }

  return (
    <>
      <NavBar />
      <div className="mb-12 mt-40 flex items-center justify-center text-4xl font-bold">
        {" "}
        List of Ordered Items
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order, index) => (
            <div key={order.id} className="sha mb-4 border p-4">
              <h2 className="mb-2 text-2xl font-bold">Order {index + 1}</h2>
              <div>
                <span className="ml-4 mr-6 text-lg">Name:</span> {order.name}
              </div>
              <div>
                <span className="ml-4 mr-2 text-lg">Contact:</span>{" "}
                {order.contact}
              </div>
              <div>
                <span className="ml-4 mr-2 text-lg">Address:</span>{" "}
                {order.address}
              </div>
              <div>
                <span className="ml-4 mr-8 text-lg">Total:</span> {order.total}
              </div>
              <div className="ml-4 mt-4">
                <span className="text-lg font-medium"> Items: </span>
                <table>
                  <thead className="bg-yellow-800">
                    <tr>
                      <th
                        scope="col"
                        className="border border-gray-800 px-6 py-3 text-center"
                      >
                        Coffee Name
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
                    {order.items.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-gray-800 py-2 text-center">
                          {item.coffeeName}
                        </td>
                        <td className="border border-gray-800 py-2 text-center">
                          {" "}
                          {item.quantity}
                        </td>
                        <td className="border border-gray-800 py-2 text-center">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* toggle done */}
              <button 
              className="flex items-center rounded-lg bg-green-900 px- py-2 text-white"
              onClick={(e)=>{
                e.preventDefault();
                mutate({
                id: order.id,
                done: true
              })}}
              >
                  Done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { api } from "~/utils/api";

type OrderItem = {
  id: string;
  coffeeName: string;
  quantity: number;
  price: number;
};

type Order = {
  id: string;
  orderCode: string;
  name: string;
  contact: string;
  address: string;
  total: number;
  done: boolean;
  items: OrderItem[];
};

const Orders = () => {
 

  const {data:orders} = api.order.getAllOrder.useQuery();

  console.log(orders)
  return (
    <>
    
    {/* {orders?.length ? orders.map(order=>{
        return <
    })} */}
    </>
    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Order Code</th>
    //         <th>Name</th>
    //         <th>Contact</th>
    //         <th>Address</th>
    //         <th>Total</th>
    //         <th>Items</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map(order => (
    //         <tr key={order.id}>
    //           <td>{order.orderCode}</td>
    //           <td>{order.name}</td>
    //           <td>{order.contact}</td>
    //           <td>{order.address}</td>
    //           <td>{order.total}</td>
    //           <td>
    //             {order.items.map(item => (
    //               <div key={item.id}>
    //                 <p>{item.coffeeName}</p>
    //                 <p>{item.quantity}</p>
    //                 <p>{item.price}</p>
    //               </div>
    //             ))}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default Orders;

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
    <></>
  );
};

export default Orders;

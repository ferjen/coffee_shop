import { z } from 'zod';

export const orderItemInput = z.object({
    orderCode: z.string().nonempty({ message: 'add an item' }),
    coffeeName: z.string().nonempty({ message: 'add an item' }),
    quantity: z.number().int().nonnegative({ message: 'add an item' }),
    order: z.object({
        connect: z.object({
            orderCode: z.string().nonempty({ message: 'add an item' }),
        }),
    }),
    price: z.number().nonnegative({ message: 'add an item' }),
});

export const createOrderInputSchema = z.object({
    orderCode: z.string().nonempty({ message: 'Order code is required' }),
    name: z.string().nonempty({ message: 'Name is required' }),
    contact: z.string().nonempty({ message: 'Contact is required' }),
    address: z.string().nonempty({ message: 'Address is required' }),
  });

export type CreateOrderInput = z.infer<typeof createOrderInputSchema>;

// Define the output type
export type CreateOrderOutput = {
  orderCode: string;
  name: string;
  contact: string;
  address: string;
  total: number;
  done: boolean;
};
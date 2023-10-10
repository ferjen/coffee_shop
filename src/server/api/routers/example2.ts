/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const orderRouter = createTRPCRouter({
  createOrder: publicProcedure
    .input(z.object({
        orderCode: z.string().nonempty({ message: 'Order code is required' }),
        name: z.string().nonempty({ message: 'Name is required' }),
        contact: z.string().nonempty({ message: 'Contact is required' }),
        address: z.string().nonempty({ message: 'Address is required' }),
        total: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
        return await ctx.db.order.create({
            data: {
                orderCode: input.orderCode,
                name: input.name,
                contact: input.contact,
                address: input.address,
                total: input.total,
                done: false,
            },
        });
    }),
    getAllOrder: publicProcedure.query(({ ctx }) => {
        return ctx.db.order.findMany({
          include: {
            items: true,
          },
        });
      }),
});

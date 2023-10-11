/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { orderItemInput } from "~/types";

export const orderItemRouter = createTRPCRouter({
    addOrderItem: publicProcedure
    .input(orderItemInput)
    .mutation(async ({ ctx, input }) => {
        return await ctx.db.orderItem.create({
            data: {
                coffeeName: input.coffeeName,
                quantity: input.quantity,
                order: {
                    connect: {
                        orderCode: input.order.connect.orderCode,
                    },
                },
                price: input.price,
            },
        });
    }),
    getAll: publicProcedure.query(({ ctx, input }) => {
      if (input === undefined) {
          // Handle the case where input is undefined. 
          // This could be throwing an error, returning a default value, etc.
          throw new Error('Input is undefined');
      }
  
      return ctx.db.orderItem.findMany({
          where: {
              orderCode: input
          }
      });
  }),
  getSecretMessage: publicProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  createTodo: publicProcedure
  // define the expected argument for validation
    .input(
      z
        .object({
          message: z.string(),
        })
        .optional()
    )
    // define the implementation destructuring the validated input
    // can destructure rawInput if not using validation
    .mutation(({input}) => {
      console.log(input);
      return "Complete";
    }),
  
});

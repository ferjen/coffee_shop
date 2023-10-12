import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { orderItemInput } from "~/types";

export const orderItemRouter = createTRPCRouter({
  hello: publicProcedure
    // .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello adasd`,
      };
    }),
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
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

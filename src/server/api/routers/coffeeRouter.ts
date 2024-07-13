
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
export const coffeeRouter = createTRPCRouter({
  
    getAllCoffee: publicProcedure.query(({ ctx }) => {
        return ctx.db.coffee.findMany({ });
      }),
});

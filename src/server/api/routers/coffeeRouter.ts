/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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

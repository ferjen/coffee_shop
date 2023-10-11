import { orderItemRouter } from "~/server/api/routers/orderItemRouter";
import { createTRPCRouter } from "~/server/api/trpc";
import { orderRouter } from "./routers/orderRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  order: orderRouter,
  orderItem:orderItemRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

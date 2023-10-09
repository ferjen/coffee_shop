import { router2 } from "~/server/api/routers/example2";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: router2,
});

// export type definition of API
export type AppRouter = typeof appRouter;

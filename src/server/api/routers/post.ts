import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ content: z.string(), authorId: z.string() }))
    .mutation(async ({ ctx, input }) =>
      ctx.db.podPost.create({
        data: {
          podId: "1",
          content: input.content,
          authorId: input.authorId,
        },
      }),
    ),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.podPost.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});

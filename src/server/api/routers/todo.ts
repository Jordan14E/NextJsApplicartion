import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const todoRouter = createTRPCRouter({
    create: publicProcedure
    .input(z.object({name: z.string(), description: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
        return await ctx.db.todo.create({
            data: {
                name: input.name,
                description: input.description
            },
        });
    }),
    getAll: publicProcedure.query(({ctx})=> {
        return ctx.db.todo.findMany({
            orderBy: { createdAt: "desc" },
        });
    }),
});
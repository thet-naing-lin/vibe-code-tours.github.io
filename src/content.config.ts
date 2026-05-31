import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Builders = students. One Markdown file per builder in src/content/builders/.
// Files starting with `_` (e.g. _example.md) are ignored by the [^_] pattern.
// Students add themselves via fork -> add builders/<github>.md -> PR.
const builders = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/builders" }),
  schema: z.object({
    name: z.string(),
    github: z.string(),
    cohort: z.number(),
    role: z.enum(["builder", "mentor", "instructor"]).default("builder"),
    repo: z.string().url().optional(),
    // team: z.string().optional(),     // DEFERRED — teams not formed yet
    // project: z.string().optional(),  // DEFERRED — no projects yet
  }),
});

export const collections = { builders };

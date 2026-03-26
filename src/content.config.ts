import { defineCollection, z } from 'astro:content';

const imagePath = z.string().regex(/^\/[A-Za-z0-9/_-]+\.(jpg|jpeg|png|webp|avif)$/i);

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    titleJa: z.string().min(1),
    year: z.number().int().gte(1900).lte(2100),
    category: z.string().min(1),
    categoryJa: z.string().min(1),
    description: z.string().min(1),
    descriptionJa: z.string().min(1),
    cover: imagePath,
    gallery: z.array(imagePath).min(1).max(20),
    galleryCredits: z.array(
      z.object({
        image: imagePath,
        credit: z.string().min(1),
      })
    ).optional(),
    credits: z.array(
      z.object({
        role: z.string().min(1),
        name: z.string().min(1),
      })
    ).min(1),
    awards: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
};

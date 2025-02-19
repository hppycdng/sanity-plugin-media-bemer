import * as z from 'zod'

export const tagOptionSchema = z.object({
  label: z.string().trim().min(1, {message: 'Label cannot be empty'}),
  value: z.string().trim().min(1, {message: 'Value cannot be empty'})
})

export const assetFormSchema = z.object({
  altText_de_DE: z.string().trim().optional(),
  altText_de_LI: z.string().trim().optional(),
  altText_en_DE: z.string().trim().optional(),
  altText_en_LI: z.string().trim().optional(),
  description_de_DE: z.string().trim().optional(),
  description_de_LI: z.string().trim().optional(),
  description_en_DE: z.string().trim().optional(),
  description_en_LI: z.string().trim().optional(),
  opt: z.object({
    media: z.object({
      tags: z.array(tagOptionSchema).nullable()
    })
  }),
  originalFilename: z.string().trim().min(1, {message: 'Filename cannot be empty'}),
  title: z.string().trim().optional()
})

export const tagFormSchema = z.object({
  name: z.string().min(1, {message: 'Name cannot be empty'})
})

import { z } from 'zod'

export const experienceSchema = z.object({
    jobTitle: z.string().min(1, {
        message: 'Job title is required'
    }),
    employer: z.string().min(1, {
        message: 'Employer is required'
    }),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    summary: z.string().optional(),
    website: z.string().url().optional()
})
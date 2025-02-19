import { z } from 'zod'

export const educationSchema = z.object({
    institution: z.string().min(1, {
        message: 'Institution is required'
    }),
    degree: z.string().min(1, {
        message: 'Degree is required'
    }),
    areaOfStudy: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    score: z.string().optional(),
    summary: z.string().optional()
})
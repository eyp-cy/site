import { z } from 'zod'

export const emailFormSchema = z.object({
  name: z.string().min(2, 'Please enter a name').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email').max(100, 'Email is too long'),
  subject: z.string().min(2, 'Subject line too short').max(200, 'Subject line too long'),
  message: z.string().min(10, 'Message too short').max(5000, 'Message too long'),
})

export type EmailFormData = z.infer<typeof emailFormSchema>

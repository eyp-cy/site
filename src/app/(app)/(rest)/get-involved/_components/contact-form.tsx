'use client'
import { ActionButton, Input, Textarea } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter a Name'),
  email: z.string().email('Please enter a valid Email'),
  subject: z.string().min(2, 'Please enter a Subject Line'),
  text: z.string().min(2, 'Please enter your Message here'),
})

type formData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formData>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit = (data: formData) => {
    const { name, email, subject, text } = data

    fetch(`/api/email`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        text,
      }),
    })
      .then((message) => {
        console.log(message)
        toast.success('Message delivered successfully.')
      })
      .catch(() => {
        toast.error('Something went wrong while sending your message. Please try again later.')
      })

    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="flex w-full flex-col md:flex-row md:gap-5">
        <div className="flex flex-col w-full h-20 justify-end">
          {errors.name && <p className="text-red-600 mb-1">{errors.name.message}</p>}
          <Input type="text" placeholder="Name" {...register('name')} />
        </div>
        <div className="flex flex-col w-full h-20 justify-end">
          {errors.email && <p className="text-red-600 mb-1">{errors.email.message}</p>}
          <Input type="email" placeholder="Email" {...register('email')} />
        </div>
      </div>
      <div className="flex flex-col w-full h-20 justify-end">
        {errors.subject && (
          <p className="w-full text-left text-red-600 mb-1">{errors.subject.message}</p>
        )}
        <Input placeholder="Subject" {...register('subject')} />
      </div>
      <div className="flex flex-col w-full h-[7.5rem] justify-end">
        {errors.text && <p className="w-full text-left text-red-600 mb-1">{errors.text.message}</p>}
        <Textarea placeholder="Message" {...register('text')} />
      </div>
      <ActionButton
        className="mt-10 disabled:bg-gray-300 disabled:text-gray-500"
        disabled={isSubmitting}
        text="Send"
        variant="button"
        onClick={() => {}}
      />
    </form>
  )
}

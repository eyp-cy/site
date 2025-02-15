import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { COMPANY_NAME, CONTACT_EMAIL, INBOX_EMAIL } from '@/content/config'
import { emailFormSchema } from '@/lib/schemas/email'

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing required environment variables')
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const result = emailFormSchema.safeParse(body)

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      return NextResponse.json(
        { error: 'Invalid form data', details: fieldErrors },
        { status: 400 },
      )
    }

    const { name, email, subject, message } = result.data

    const { data, error } = await resend.emails.send({
      from: `${COMPANY_NAME} <${INBOX_EMAIL}>`, // TODO: verify domain in Resend
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: data?.id,
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 },
    )
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć minimum 2 znaki'),
  email: z.string().email('Nieprawidłowy format email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Wiadomość musi mieć minimum 10 znaków'),
});

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL || 'kontakt@twojserwis.pl';

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'TWÓJSERWIS <onboarding@resend.dev>',
      to: [contactEmail],
      subject: `Nowa wiadomość z formularza kontaktowego - ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #8B4513; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #8B4513; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nowa wiadomość z formularza kontaktowego</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Imię i nazwisko:</div>
                  <div class="value">${validatedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${validatedData.email}</div>
                </div>
                ${validatedData.phone ? `
                <div class="field">
                  <div class="label">Telefon:</div>
                  <div class="value">${validatedData.phone}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Wiadomość:</div>
                  <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Wystąpił błąd podczas wysyłania wiadomości' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Nieprawidłowe dane formularza', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Wystąpił błąd serwera' },
      { status: 500 }
    );
  }
}

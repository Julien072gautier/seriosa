import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const { to, subject, text } = await request.json();

    if (!to || !subject || !text) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, text' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Seriosa 2.0 <noreply@seriosa.fr>',
      to: [to],
      subject: subject,
      text: text,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      messageId: data?.id,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

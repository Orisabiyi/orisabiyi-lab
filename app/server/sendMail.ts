'use server'

import nodemailer from 'nodemailer';

export async function sendMail(text: string, clientEmail: string) {
  try {
    const mailer = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await mailer.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: ['orisabiyidavid@gmail.com', clientEmail],
      subject: `New message from ${clientEmail} - Orisabiyi Lab`,
      text,
      replyTo: clientEmail,
    });

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(errorMsg);
  }
}
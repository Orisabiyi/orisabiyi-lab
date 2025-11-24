'use server'

import nodemailer from 'nodemailer';

const username = process.env.GMAIL_USERNAME!;
const password = process.env.GMAIL_PASSWORD!;

export async function sendMail(text: string, clientEmail: string) {
  try {
    const mailer = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: username,
        pass: password,
      },
    });

    await mailer.sendMail({
      from: username,
      to: 'orisabiyidavid@gmail.com',
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
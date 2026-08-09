import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Orisabiyi David — Portfolio" <${process.env.SMTP_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin: 0; padding: 0; background-color: #F3EDE1; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F3EDE1; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

              <!-- Header -->
              <tr>
                <td style="background-color: #0D0D0D; padding: 24px 32px; border: 4px solid #0D0D0D;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">
                          Orisabiyi David<span style="color: #FF4133;">.</span>
                        </h1>
                        <p style="margin: 4px 0 0; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 2px;">
                          New Portfolio Message
                        </p>
                      </td>
                      <td align="right" valign="middle">
                        <div style="width: 40px; height: 40px; background-color: #FF4133; display: inline-block; text-align: center; line-height: 40px; font-weight: 900; font-size: 16px; color: #0D0D0D; border: 2px solid #0D0D0D;">
                          ✉
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Red accent bar -->
              <tr>
                <td style="background-color: #FF4133; height: 6px; border-left: 4px solid #0D0D0D; border-right: 4px solid #0D0D0D;"></td>
              </tr>

              <!-- Sender info card -->
              <tr>
                <td style="background-color: #FFDE59; padding: 24px 32px; border-left: 4px solid #0D0D0D; border-right: 4px solid #0D0D0D; border-bottom: 4px solid #0D0D0D;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="50%" style="padding-right: 16px; vertical-align: top;">
                        <p style="margin: 0 0 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #0D0D0D; opacity: 0.5;">
                          From
                        </p>
                        <p style="margin: 0; font-size: 18px; font-weight: 800; color: #0D0D0D;">
                          ${name}
                        </p>
                      </td>
                      <td width="50%" style="padding-left: 16px; vertical-align: top;">
                        <p style="margin: 0 0 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #0D0D0D; opacity: 0.5;">
                          Email
                        </p>
                        <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0D0D0D;">
                          <a href="mailto:${email}" style="color: #0D0D0D; text-decoration: none; border-bottom: 2px solid #0D0D0D;">
                            ${email}
                          </a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Subject -->
              <tr>
                <td style="background-color: #ffffff; padding: 28px 32px 20px; border-left: 4px solid #0D0D0D; border-right: 4px solid #0D0D0D;">
                  <p style="margin: 0 0 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #0D0D0D; opacity: 0.4;">
                    Subject
                  </p>
                  <h2 style="margin: 0; font-size: 22px; font-weight: 800; color: #0D0D0D; line-height: 1.3;">
                    ${subject}
                  </h2>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="background-color: #ffffff; padding: 0 32px; border-left: 4px solid #0D0D0D; border-right: 4px solid #0D0D0D;">
                  <div style="border-top: 3px solid #0D0D0D; position: relative;">
                    <div style="width: 10px; height: 10px; background-color: #FF4133; border: 2px solid #0D0D0D; position: absolute; top: -7px; left: 0;"></div>
                  </div>
                </td>
              </tr>

              <!-- Message body -->
              <tr>
                <td style="background-color: #ffffff; padding: 24px 32px 32px; border-left: 4px solid #0D0D0D; border-right: 4px solid #0D0D0D;">
                  <p style="margin: 0 0 8px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #0D0D0D; opacity: 0.4;">
                    Message
                  </p>
                  <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #0D0D0D; white-space: pre-wrap;">
                    ${message}
                  </p>
                </td>
              </tr>

              <!-- Reply button -->
              <tr>
                <td style="background-color: #ffffff; padding: 0 32px 32px; border-left: 4px solid #0D0D0D; border-right: 4px solid #0D0D0D; border-bottom: 4px solid #0D0D0D;">
                  <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; padding: 14px 28px; background-color: #FF4133; color: #0D0D0D; font-size: 14px; font-weight: 700; text-decoration: none; border: 2px solid #0D0D0D; box-shadow: 3px 3px 0 0 #0D0D0D;">
                    Reply to ${name} &rarr;
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 24px 32px; text-align: center;">
                  <p style="margin: 0 0 4px; font-size: 11px; color: #0D0D0D; opacity: 0.4;">
                    Sent from the contact form at
                  </p>
                  <a href="https://orisabiyi-lab.vercel.app" style="font-size: 11px; color: #FF4133; font-weight: 700; text-decoration: none;">
                    orisabiyi-lab.vercel.app
                  </a>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Log the received data for debugging
    console.log("Received data from client:", { name, email, message });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you (with reply-to header to email the person back)
    await transporter.sendMail({
      from: `"${name}" <${email}>`,  // Shows the email from the person contacting you
      to: 'korbin.dylanprints@gmail.com', // Your email where you receive the contact form message
      subject: `New Request (${name})`,
      text: `Request details: ${message}`,
      replyTo: email, // This allows you to reply to their email directly
    });

    // Optional: Confirmation email to the person submitting the form
    await transporter.sendMail({
      from: 'korbin.dylanprints@gmail.com',
      to: email,
      subject: 'We received your request!',
      text: `Hello ${name},\n\nThank you for reaching out. We have received your request and will get back to you regarding it soon.\n\nYour request: "${message}"`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error sending email' }), { status: 500 });
  }
}

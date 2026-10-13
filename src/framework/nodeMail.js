import nodemailer from "nodemailer";

const {
  EMAIL_ADDRESS,
  EMAIL_PASSWORD,
  EMAIL_SERVER,
  EMAIL_NAME,
  EMAIL_PORT,
  EMAIL_TO,
} = process.env;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const sendEmail = async (formData) => {
  const { name, email, message } = formData;
  const port = Number(EMAIL_PORT);

  if (!EMAIL_ADDRESS || !EMAIL_PASSWORD || !EMAIL_SERVER || !port) {
    return false;
  }

  const emailTemplate = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px;">
      <h2 style="color: #007BFF;">New Contact Form Submission</h2>
      <p>You have received a new message from your portfolio website's contact form:</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background-color: #f0f0f0;">Name:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background-color: #f0f0f0;">Email:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background-color: #f0f0f0;">Message:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(message)}</td>
        </tr>
      </table>
    </div>
    <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
      This email was sent from the contact form on your portfolio website.
    </p>
  </div>
`;

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER,
      port,
      secure: port === 465,
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${EMAIL_NAME || "Portfolio"}" <${EMAIL_ADDRESS}>`,
      to: EMAIL_TO || "tarunsrajput25@gmail.com",
      replyTo: email,
      subject: "Portfolio Contact Form Submission",
      html: emailTemplate,
    });
    return true;
  } catch {
    return false;
  }
};

export default sendEmail;

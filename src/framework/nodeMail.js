import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const {
  EMAIL_ADDRESS,
  EMAIL_PASSWORD,
  EMAIL_SERVER,
  EMAIL_NAME,
  EMAIL_PORT,
} = process.env;

const sendEmail = async (formData) => {
  const { name, email, message } = formData;

  // Create an email template
  const emailTemplate = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px;">
      <h2 style="color: #007BFF;">New Contact Form Submission</h2>
      <p>You have received a new message from your portfolio website's contact form:</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background-color: #f0f0f0;">Name:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background-color: #f0f0f0;">Email:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background-color: #f0f0f0;">Message:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
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
      port: EMAIL_PORT,
      secure: EMAIL_PORT == 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${EMAIL_NAME}" <${EMAIL_ADDRESS}>`,
      to: "tarunsrajput25@gmail.com", // Change this to your email address
      subject: "Portfolio Contact Form Submission",
      html: emailTemplate,
    };
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendEmail;

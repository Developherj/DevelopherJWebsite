"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: EmailData) => {
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  await resend.emails.send({
    to: "developherj@gmail.com", // use your own email for testing
    from: "onboarding@resend.dev",
    subject: `You got an enquiry from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>`,
  });
};

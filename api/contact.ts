import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        error: "Please complete all required fields.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["jonyangomail@gmail.com"],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType}

Project Brief & Goals:
${message}
      `,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({
        error: "Failed to send message.",
      });
    }

    return res.status(200).json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
}
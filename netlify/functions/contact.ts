import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body || '{}');
  const { civilite, nom, prenom, email, telephone, entreprise, domaine, message } = data;

  const mailOptions = {
    from: `"${civilite} ${prenom} ${nom}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Nouvelle demande de contact - ${domaine || 'Général'}`,
    html: `
      <div style="font-family:sans-serif; line-height:1.5; color:#333;">
        <h2 style="color:#25D366;">Nouvelle demande de contact</h2>
        <p><strong>Civilité:</strong> ${civilite}</p>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || '-'}</p>
        <p><strong>Entreprise:</strong> ${entreprise || '-'}</p>
        <p><strong>Domaine:</strong> ${domaine || '-'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr style="border:none; border-top:1px solid #eee; margin:10px 0;">
        <p>Envoyé depuis <strong>monceaudavidconseil.com</strong></p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: JSON.stringify({ message: 'Email envoyé avec succès' }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ message: 'Erreur lors de l’envoi de l’email' }) };
  }
};

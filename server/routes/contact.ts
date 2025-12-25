import { Router } from 'express';
import { transporter } from '../utils/mailer';

const router = Router();

router.post('/send', async (req, res) => {
  const { civilite, nom, prenom, email, telephone, entreprise, domaine, message } = req.body;

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
    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l’envoi de l’email' });
  }
});

export default router;

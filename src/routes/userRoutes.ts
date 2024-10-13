import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import transporter from '../config/emailConfig';

const prisma = new PrismaClient();
const router = Router();

// Rota para criar um usuário
router.post('/users', async (req, res) => {
  const { email, name } = req.body;

  try {
    const user = await prisma.user.create({
      data: { email, name },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota para enviar email
router.post('/send-email', async (req, res) => {
  const { email } = req.body;

  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Test Email',
      text: 'Hello from Gmail using Node.js!',
    };

    const result = await transporter.sendMail(mailOptions);
    res.status(200).send('Email enviado com sucesso! ' + result);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).send('Erro ao enviar email.');
  }
});

export default router;
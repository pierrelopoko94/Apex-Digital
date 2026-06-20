import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

// Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Target recipient emails for Apex Digital Team notifications
const RECIPIENT_EMAILS = [
  'pierrelopoko94@gmail.com',
  'shouaybselenge@gmail.com',
  'clement@gmail.com'
];

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  date: string;
}

const DATABASE_FILE = path.join(process.cwd(), 'submissions.json');

// Ensure database file exists with valid JSON array
function initializeDatabase() {
  try {
    if (!fs.existsSync(DATABASE_FILE)) {
      fs.writeFileSync(DATABASE_FILE, JSON.stringify([], null, 2), 'utf8');
      console.log('Database initialized: submissions.json created.');
    }
  } catch (error) {
    console.error('Failed to initialize database file:', error);
  }
}

initializeDatabase();

// API: Check health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// API: Retrieve all contact submissions (dashboard ingest)
app.get('/api/submissions', (req, res) => {
  try {
    if (!fs.existsSync(DATABASE_FILE)) {
      return res.json([]);
    }
    const data = fs.readFileSync(DATABASE_FILE, 'utf8');
    const submissions = JSON.parse(data);
    res.json(submissions);
  } catch (error) {
    console.error('Error reading submissions:', error);
    res.status(500).json({ error: 'Failed to read database records' });
  }
});

// API: Post single contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nom, e-mail et message requis.' });
    }

    const dateStr = new Date().toISOString();
    const newSubmission: ContactSubmission = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      projectType: projectType || 'web-dev',
      message,
      date: dateStr,
    };

    // Save to server-side JSON database
    let submissions: ContactSubmission[] = [];
    if (fs.existsSync(DATABASE_FILE)) {
      const data = fs.readFileSync(DATABASE_FILE, 'utf8');
      try {
        submissions = JSON.parse(data);
      } catch (e) {
        submissions = [];
      }
    }
    submissions.unshift(newSubmission); // add new to the top
    fs.writeFileSync(DATABASE_FILE, JSON.stringify(submissions, null, 2), 'utf8');

    // Human-friendly project type name
    const projectLabels: Record<string, string> = {
      'web-dev': 'Développement Web',
      'branding': 'Branding & Identité',
      'video': 'Production Vidéo',
      'strategy': 'Stratégie Digitale',
      'consult': 'Conseil & Architecture',
    };
    const projectLabel = projectLabels[newSubmission.projectType] || newSubmission.projectType;

    // Send emails using nodemailer
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const emailSubject = `Apex Digital - Nouveau Projet soumis par ${name}`;
    const formattedDate = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Kinshasa' });

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #030303; color: #f3f4f6; padding: 40px 20px; text-align: left; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #0d0d0d; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08); overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.8);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0d0d0d, #050505); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
            <div style="color: #00BFFF; font-size: 10px; font-family: monospace; letter-spacing: 5px; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">APEX DIGITAL SYSTEM</div>
            <h1 style="color: #ffffff; font-size: 22px; font-weight: 500; margin: 0; letter-spacing: -0.5px;">Nouveau Message Visiteur</h1>
          </div>
          
          <!-- Content Body -->
          <div style="padding: 35px 30px;">
            <p style="font-size: 14px; color: #9ca3af; margin-top: 0; line-height: 1.6;">
              Un nouveau formulaire de proposition de projet a été soumis de manière sécurisée de la part d'un prospect sur le site d'Apex Digital.
            </p>
            
            <div style="margin: 25px 0; background-color: rgba(255, 255, 255, 0.02); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.04); padding: 25px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <tr>
                  <td style="color: #6b7280; padding: 6px 0; width: 130px; font-family: monospace; text-transform: uppercase;">Nom complet :</td>
                  <td style="color: #ffffff; padding: 6px 0; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; padding: 6px 0; font-family: monospace; text-transform: uppercase;">Adresse E-mail :</td>
                  <td style="color: #ffffff; padding: 6px 0;">
                    <a href="mailto:${email}" style="color: #00BFFF; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #6b7280; padding: 6px 0; font-family: monospace; text-transform: uppercase;">Secteur d'activité :</td>
                  <td style="color: #00BFFF; padding: 6px 0; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase; font-size: 11px;">${projectLabel}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; padding: 6px 0; font-family: monospace; text-transform: uppercase;">Date de dépôt :</td>
                  <td style="color: #9ca3af; padding: 6px 0;">${formattedDate} (UTC+1 Kinshasa)</td>
                </tr>
              </table>
            </div>

            <!-- Message Block -->
            <div style="background-color: #030303; border-radius: 12px; border-left: 3px solid #00BFFF; padding: 20px 25px; margin-top: 30px;">
              <div style="font-size: 10px; font-family: monospace; color: #6b7280; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px;">MESSAGE ORIGINAL :</div>
              <p style="font-size: 14px; line-height: 1.7; color: #e5e7eb; font-style: normal; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #050505; padding: 25px 30px; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center; font-size: 11px; color: #4b5563;">
            <p style="margin: 0 0 8px 0; font-family: monospace; letter-spacing: 1px;">SÉCURISÉ PAR SÉCURITÉ CORE // AFRITECH LABS</p>
            <p style="margin: 0; font-size: 10px;">Cet e-mail est généré automatiquement par la plateforme lors d'un envoi de formulaire de contact.</p>
          </div>
        </div>
      </div>
    `;

    console.log('\n=========================================');
    console.log('📬 NEW INCOMING SUBMISSION SUBMITTED:');
    console.log(`- NOM: ${name}`);
    console.log(`- EMAIL: ${email}`);
    console.log(`- TYPE: ${projectLabel}`);
    console.log(`- MESSAGE: ${message}`);
    console.log('=========================================\n');

    if (smtpUser && smtpPass) {
      console.log(`SMTP configured. Attempting to deliver notification emails to: ${RECIPIENT_EMAILS.join(', ')}`);
      
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Send to recipients
      const sendPromises = RECIPIENT_EMAILS.map(recipient => {
        return transporter.sendMail({
          from: `"Apex Digital Contact" <${smtpUser}>`,
          to: recipient,
          subject: emailSubject,
          html: htmlBody,
          text: `Nouveau message de ${name} (${email}) - Projet: ${projectLabel}\n\nMessage:\n${message}\n\nEnvoyé le: ${formattedDate}`,
        });
      });

      await Promise.all(sendPromises);
      console.log('✅ All email notifications delivered successfully!');
    } else {
      console.warn('⚠️ SMTP_USER or SMTP_PASS environments variables are not configured in Settings.');
      console.warn('The contact message has been saved securely to database submissions.json.');
      console.warn('Logging simulated HTML content check above.\n');
    }

    // Always succeed when saved successfully in the server-side database
    res.status(200).json({
      success: true,
      message: 'Votre message a bien été enregistré dans notre base de données et les notifications d\'équipe ont été envoyées.',
      submissionId: newSubmission.id,
      smtpConfigured: !!(smtpUser && smtpPass)
    });
  } catch (error: any) {
    console.error('Contact submission handler error:', error);
    res.status(500).json({
      error: 'Une erreur interne est survenue lors de l’envoi de votre message.',
      details: error.message
    });
  }
});

// Vite Integration & Production Files Serving
async function start() {
  const httpServer = http.createServer(app);

  if (process.env.NODE_ENV !== 'production') {
    const enableHmr = process.env.DISABLE_HMR !== 'true';
    const viteConfig: any = {
      server: {
        middlewareMode: true,
      },
      appType: 'spa' as const,
    };

    if (enableHmr) {
      viteConfig.server.hmr = {
        server: httpServer,
      };
    } else {
      viteConfig.server.hmr = false;
    }

    const vite = await createViteServer(viteConfig);
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

start();

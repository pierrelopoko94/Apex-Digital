var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_http = __toESM(require("http"), 1);
var import_nodemailer = __toESM(require("nodemailer"), 1);
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
app.use(import_express.default.urlencoded({ extended: true }));
var RECIPIENT_EMAILS = [
  "pierrelopoko94@gmail.com",
  "shouaybselenge@gmail.com",
  "clement@gmail.com"
];
var DATABASE_FILE = import_path.default.join(process.cwd(), "submissions.json");
function initializeDatabase() {
  try {
    if (!import_fs.default.existsSync(DATABASE_FILE)) {
      import_fs.default.writeFileSync(DATABASE_FILE, JSON.stringify([], null, 2), "utf8");
      console.log("Database initialized: submissions.json created.");
    }
  } catch (error) {
    console.error("Failed to initialize database file:", error);
  }
}
initializeDatabase();
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", serverTime: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api/submissions", (req, res) => {
  try {
    if (!import_fs.default.existsSync(DATABASE_FILE)) {
      return res.json([]);
    }
    const data = import_fs.default.readFileSync(DATABASE_FILE, "utf8");
    const submissions = JSON.parse(data);
    res.json(submissions);
  } catch (error) {
    console.error("Error reading submissions:", error);
    res.status(500).json({ error: "Failed to read database records" });
  }
});
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Nom, e-mail et message requis." });
    }
    const dateStr = (/* @__PURE__ */ new Date()).toISOString();
    const newSubmission = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      projectType: projectType || "web-dev",
      message,
      date: dateStr
    };
    let submissions = [];
    if (import_fs.default.existsSync(DATABASE_FILE)) {
      const data = import_fs.default.readFileSync(DATABASE_FILE, "utf8");
      try {
        submissions = JSON.parse(data);
      } catch (e) {
        submissions = [];
      }
    }
    submissions.unshift(newSubmission);
    import_fs.default.writeFileSync(DATABASE_FILE, JSON.stringify(submissions, null, 2), "utf8");
    const projectLabels = {
      "web-dev": "D\xE9veloppement Web",
      "branding": "Branding & Identit\xE9",
      "video": "Production Vid\xE9o",
      "strategy": "Strat\xE9gie Digitale",
      "consult": "Conseil & Architecture"
    };
    const projectLabel = projectLabels[newSubmission.projectType] || newSubmission.projectType;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailSubject = `Apex Digital - Nouveau Projet soumis par ${name}`;
    const formattedDate = (/* @__PURE__ */ new Date()).toLocaleString("fr-FR", { timeZone: "Africa/Kinshasa" });
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
              Un nouveau formulaire de proposition de projet a \xE9t\xE9 soumis de mani\xE8re s\xE9curis\xE9e de la part d'un prospect sur le site d'Apex Digital.
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
                  <td style="color: #6b7280; padding: 6px 0; font-family: monospace; text-transform: uppercase;">Secteur d'activit\xE9 :</td>
                  <td style="color: #00BFFF; padding: 6px 0; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase; font-size: 11px;">${projectLabel}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; padding: 6px 0; font-family: monospace; text-transform: uppercase;">Date de d\xE9p\xF4t :</td>
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
            <p style="margin: 0 0 8px 0; font-family: monospace; letter-spacing: 1px;">S\xC9CURIS\xC9 PAR S\xC9CURIT\xC9 CORE // AFRITECH LABS</p>
            <p style="margin: 0; font-size: 10px;">Cet e-mail est g\xE9n\xE9r\xE9 automatiquement par la plateforme lors d'un envoi de formulaire de contact.</p>
          </div>
        </div>
      </div>
    `;
    console.log("\n=========================================");
    console.log("\u{1F4EC} NEW INCOMING SUBMISSION SUBMITTED:");
    console.log(`- NOM: ${name}`);
    console.log(`- EMAIL: ${email}`);
    console.log(`- TYPE: ${projectLabel}`);
    console.log(`- MESSAGE: ${message}`);
    console.log("=========================================\n");
    if (smtpUser && smtpPass) {
      console.log(`SMTP configured. Attempting to deliver notification emails to: ${RECIPIENT_EMAILS.join(", ")}`);
      const transporter = import_nodemailer.default.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });
      const sendPromises = RECIPIENT_EMAILS.map((recipient) => {
        return transporter.sendMail({
          from: `"Apex Digital Contact" <${smtpUser}>`,
          to: recipient,
          subject: emailSubject,
          html: htmlBody,
          text: `Nouveau message de ${name} (${email}) - Projet: ${projectLabel}

Message:
${message}

Envoy\xE9 le: ${formattedDate}`
        });
      });
      await Promise.all(sendPromises);
      console.log("\u2705 All email notifications delivered successfully!");
    } else {
      console.warn("\u26A0\uFE0F SMTP_USER or SMTP_PASS environments variables are not configured in Settings.");
      console.warn("The contact message has been saved securely to database submissions.json.");
      console.warn("Logging simulated HTML content check above.\n");
    }
    res.status(200).json({
      success: true,
      message: "Votre message a bien \xE9t\xE9 enregistr\xE9 dans notre base de donn\xE9es et les notifications d'\xE9quipe ont \xE9t\xE9 envoy\xE9es.",
      submissionId: newSubmission.id,
      smtpConfigured: !!(smtpUser && smtpPass)
    });
  } catch (error) {
    console.error("Contact submission handler error:", error);
    res.status(500).json({
      error: "Une erreur interne est survenue lors de l\u2019envoi de votre message.",
      details: error.message
    });
  }
});
async function start() {
  const httpServer = import_http.default.createServer(app);
  if (process.env.NODE_ENV !== "production") {
    const enableHmr = process.env.DISABLE_HMR !== "true";
    const viteConfig = {
      server: {
        middlewareMode: true
      },
      appType: "spa"
    };
    if (enableHmr) {
      viteConfig.server.hmr = {
        server: httpServer
      };
    } else {
      viteConfig.server.hmr = false;
    }
    const vite = await (0, import_vite.createServer)(viteConfig);
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`\u{1F680} Server running on http://localhost:${PORT}`);
  });
}
start();
//# sourceMappingURL=server.cjs.map

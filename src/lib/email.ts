import nodemailer from 'nodemailer';

export type SendMailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

export type SendMailResult = {
  ok: boolean;
  error?: 'EMAIL_NOT_CONFIGURED' | 'SEND_FAILED';
};

function readConfig() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;

  if (!host || !port || !user || !pass || !from || !to) {
    return null;
  }

  return {
    host,
    port: Number(port),
    user,
    pass,
    from,
    // MAIL_TO supporta piu destinatari separati da virgola (gestore + proprietario)
    to: to.split(',').map((address) => address.trim()).filter(Boolean),
  };
}

/**
 * Invia una email tramite SMTP generico (config da variabili d'ambiente).
 * Non lancia mai: ritorna un esito cosi le Server Action possono mostrare
 * un messaggio all'utente senza crashare la richiesta.
 */
export async function sendMail({ subject, text, replyTo }: SendMailInput): Promise<SendMailResult> {
  const config = readConfig();
  if (!config) {
    return { ok: false, error: 'EMAIL_NOT_CONFIGURED' };
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465, // 465 = SSL, altrimenti STARTTLS
    auth: { user: config.user, pass: config.pass },
  });

  try {
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      subject,
      text,
      replyTo,
    });
    return { ok: true };
  } catch {
    return { ok: false, error: 'SEND_FAILED' };
  }
}

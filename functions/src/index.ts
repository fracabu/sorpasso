import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";

admin.initializeApp();

const DESTINATARIO = "ilsorpassodilorenzobasile@gmail.com";
const {email, pass} = functions.config().gmail;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {user: email, pass: pass},
});

export const sendContactEmail = functions
  .region("europe-west1")
  .firestore
  .document("contact_requests/{docId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    if (!data) {
      console.warn("Documento privo di dati", context.params.docId);
      return null;
    }

    // Estrazione con le chiavi corrette
    const name = data.name as string;
    const surname = data.surname as string;
    const userEmail = data.email as string;
    const message = data.message as string;

    const mailOptions = {
      from: `"Il Sorpasso" <${email}>`,
      to: DESTINATARIO,
      replyTo: userEmail,
      subject: `Richiesta da ${name} ${surname}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
<p><strong>Cognome:</strong> ${surname}</p>
<p><strong>Email utente:</strong> ${userEmail}</p>
<p><strong>Messaggio:</strong><br/>${message}</p>`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      // Spezzato per non superare 80 caratteri
      console.log(
        "Email inviata a",
        DESTINATARIO,
        "messageId:",
        info.messageId
      );
    } catch (err) {
      console.error("Errore invio email:", err);
    }

    return null;
  });

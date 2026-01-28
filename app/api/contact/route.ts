import { NextResponse } from "next/server"

// POST /api/contact
export async function POST(req: Request) {
  try {
    const apiKey = process.env.BREVO_API_KEY
    const senderEmail = process.env.BREVO_SENDER_EMAIL
    const senderName = process.env.BREVO_SENDER_NAME || "AfreeCycle"
    const toEmail = process.env.BREVO_TO_EMAIL

    if (!apiKey || !senderEmail || !toEmail) {
      return NextResponse.json(
        { error: "Configuration serveur manquante (Brevo)" },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { nom, email, telephone, message } = body || {}

    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont obligatoires." },
        { status: 400 }
      )
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif;">
        <h2>Nouveau message – AfreeCycle</h2>
        <ul>
          <li><strong>Nom :</strong> ${escapeHtml(nom)}</li>
          <li><strong>Email :</strong> ${escapeHtml(email)}</li>
          <li><strong>Téléphone :</strong> ${escapeHtml(telephone || "")}</li>
        </ul>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `

    const payload = {
      sender: { email: senderEmail, name: senderName },
      to: [{ email: toEmail }],
      subject: "Nouvelle demande de contact – AfreeCycle",
      htmlContent,
      replyTo: { email, name: nom },
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const details = await res.json().catch(() => ({}))
      return NextResponse.json(
        { error: "Échec de l’envoi", details },
        { status: 502 }
      )
    }

    return NextResponse.json({
      message: "Message envoyé avec succès",
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

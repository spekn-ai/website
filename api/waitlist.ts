import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body as { email?: string };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Valid email required" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    console.error("Missing BREVO_API_KEY or BREVO_LIST_ID env vars");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (response.ok || response.status === 201 || response.status === 204) {
      return res.status(200).json({ success: true });
    }

    const data = await response.json();

    // Duplicate contact is not an error for us
    if (data.code === "duplicate_parameter") {
      return res.status(200).json({ success: true });
    }

    console.error("Brevo API error:", data);
    return res.status(502).json({ error: "Failed to subscribe" });
  } catch (err) {
    console.error("Brevo request failed:", err);
    return res.status(502).json({ error: "Failed to subscribe" });
  }
}

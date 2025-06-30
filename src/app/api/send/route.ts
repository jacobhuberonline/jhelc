import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";

/**
 * POST /api/send
 * Receives the form fields from the ContactForm and sends an email
 * via Resend using the EmailTemplate React component.
 */
const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Core details
    const name = (formData.get("name") || "").toString();
    const email = (formData.get("email") || "").toString();
    const phone = (formData.get("phone") || "").toString();
    const contactMethod = (formData.get("preferred") || "").toString();
    const service = (formData.get("service") || "").toString();
    const customService = (formData.get("customService") || "").toString();
    const address = (formData.get("address") || "").toString();

    // Extras can be multi‑value checkboxes
    const extras = formData.getAll("extras").map((x) => x.toString());
    const customExtras = (formData.get("customExtras") || "").toString();
    const message = (formData.get("message") || "").toString();

    // Resolve “Other” selections
    const chosenService = service === "Other" ? customService : service;
    const allExtras =
      extras.includes("Other") && customExtras
        ? extras.filter((e) => e !== "Other").concat(customExtras)
        : extras;

    const { error } = await resend.emails.send({
      from: "Simple Landscaping <hello@mail.jhelc.com>",
      to: ["jhe.lc@outlook.com"],
      subject: `Quote request – ${name}`,
      react: EmailTemplate({
        name,
        service: chosenService,
        phone,
        contactMethod,
        address,
        extras: allExtras,
        message,
      }),
      replyTo: email || undefined,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
import { OpenRouter } from "@openrouter/sdk";
import { adithyanContext } from "../../data/adithyanContext";

export async function POST(req) {
  try {
    const openrouter = new OpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const { message } = await req.json();

    const systemPrompt = `
You are a portfolio assistant for Adithyan.

IMPORTANT:
The PROFILE below is the ONLY source of information you may use about Adithyan.

Do NOT use your pretrained knowledge to answer questions about Adithyan.

Do NOT interpret "Adithyan" as a general name, celebrity, fictional character,
or another person.

If the requested information is not explicitly present in the PROFILE,
respond exactly:

"I don't have that information about Adithyan."

PROFILE:
${adithyanContext}
`;

    const response = await openrouter.chat.send({
      chatRequest: {
        model: "nvidia/nemotron-3.5-lightning:free",
        system: systemPrompt,
        temperature: 0,
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      },
    });

    const reply = response.choices[0].message.content;

    return Response.json({ reply });
  } catch (error) {
    console.error("OpenRouter error:", error);

    return Response.json(
      {
        error: "Failed to get AI response",
      },
      {
        status: 500,
      },
    );
  }
}

import { adithyanContext } from "../../data/adithyanContext";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    const profile = JSON.stringify(adithyanContext, null, 2);

    const systemPrompt = `
You are the portfolio assistant for Adithyan K S.

You are talking about ONE SPECIFIC PERSON:
Adithyan K S, a Frontend Engineer.

Use ONLY the PROFILE provided below when answering questions about Adithyan.

RULES:
- Never use outside knowledge about Adithyan.
- Never assume the user is asking about another person named Adithyan.
- Never ask which Adithyan the user means.
- Never invent information.
- If the requested information is not present in the PROFILE, say:
"I don't have that information about Adithyan."
- If asked "Tell me about Adithyan", summarize his profile.
- Speak about Adithyan in the third person.
- Keep answers concise and conversational.

PROFILE:

${profile}
`;

    const openRouterResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },

        body: JSON.stringify({
          model: "openai/gpt-oss-20b:free",

          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],

          temperature: 0,
        }),
      },
    );

    const data = await openRouterResponse.json();

    // Important: show the actual OpenRouter error
    if (!openRouterResponse.ok) {
      console.error("OpenRouter API error:", data);

      return Response.json(
        {
          error: data?.error?.message || "OpenRouter request failed",
        },
        {
          status: openRouterResponse.status,
        },
      );
    }

    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      console.error("Unexpected OpenRouter response:", data);

      return Response.json(
        {
          error: "No response was returned by the model",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("API route error:", error);

    return Response.json(
      {
        error: error.message || "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}

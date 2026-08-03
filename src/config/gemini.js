import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function runChat(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",

      contents: `
Answer in clean Markdown format.

Follow these rules:
- Use headings (##) when explaining topics.
- Use bullet points for lists.
- Keep paragraphs separated.
- Use code blocks for programming examples.
- Avoid writing everything as one long paragraph.

Question:
${prompt}
`,
    });

    return response.text;

  } catch (error) {
    console.error("Gemini Error:", error);

    if (error.message?.includes("429")) {
      return "⚠️ Gemini API quota exceeded. Please try again later or use a new API key.";
    }

    return "❌ Something went wrong. Please try again.";
  }
}
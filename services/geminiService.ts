import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChristmasGreeting = async (name: string, tone: string): Promise<string> => {
  try {
    const prompt = `Write a short, warm, and sparkling Christmas greeting (max 40 words) for someone named "${name}". 
    The tone should be ${tone}. 
    Imagine the greeting is coming from a Christmas party with the In the Night Garden characters: Makka Pakka, Upsy Daisy, Igglepiggle, the Pontipines, and the Haahoos.
    They are all sitting around a fireplace with gifts.
    The language should be Chinese (Simplified). Add some festive emojis.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Merry Christmas! 🎄✨";
  } catch (error) {
    console.error("Error generating greeting:", error);
    throw new Error("Failed to generate greeting via Gemini.");
  }
};
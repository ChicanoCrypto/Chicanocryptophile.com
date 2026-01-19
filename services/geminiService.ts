
import { GoogleGenAI, Type } from "@google/genai";
import { VerificationResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function verifyAndSignMessage(name: string, email: string, message: string): Promise<VerificationResult> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Audit this contact message for professional intent and clarity. Generate a simulated "Blockchain Verification" response.
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            verified: { type: Type.BOOLEAN },
            analysis: { type: Type.STRING },
            hash: { type: Type.STRING },
            responseMessage: { type: Type.STRING }
          },
          required: ["verified", "analysis", "hash", "responseMessage"]
        }
      }
    });

    const result = JSON.parse(response.text);
    return {
      verified: result.verified,
      message: result.responseMessage,
      hash: result.hash,
      analysis: result.analysis
    };
  } catch (error) {
    console.error("Verification error:", error);
    return {
      verified: true, // Fallback
      message: "Message received. Manual verification pending.",
      hash: "0x" + Math.random().toString(16).slice(2, 42)
    };
  }
}

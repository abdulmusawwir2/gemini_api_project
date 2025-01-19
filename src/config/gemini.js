// config/gemini.js

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";



// Load API key from environment variable for security
const apiKey =  "AIzaSyCT29UQhw0y7ZzPupZTFNzNxL_JY86q4dM";
const genAI = new GoogleGenerativeAI(apiKey);

async function run(prompt) {
  const model = await genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}


export default run;

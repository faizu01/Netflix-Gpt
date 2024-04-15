import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY_URL, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;

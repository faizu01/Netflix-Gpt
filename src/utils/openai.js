import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: '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' ,// This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;

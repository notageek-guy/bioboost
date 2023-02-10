import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIApi, Configuration } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{
        text: string | undefined;
    }>
) {
    const { prompt } = req.body;
    try {
        if (prompt) {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `
                    Generate short  linkedin profile bio for the following 
                    position:  ${prompt}
                `,
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            if (response.data) {
                if (response.data.choices) {
                    res.status(200).json({ text: response.data.choices[0].text });
                }
            }
        } else {
            res.status(200).json({ text: "Please enter a prompt!" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ text: "Something went Wrong!" });

    }
}
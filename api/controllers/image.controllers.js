import { pipeline } from "@xenova/transformers"
import{ GoogleGenerativeAI } from "@google/generative-ai";


export const getdata = async (req, res) => {
    try{
        console.log(req.body.url)
        const captioner = await pipeline('image-to-text', 'Xenova/vit-gpt2-image-captioning');
        const url = req.body.url;
        console.log(url)
        const output = await captioner(url);
        res.status(200).json({output})
    }catch(error){
        console.log(error)
    }
}

export const getcaptions = async (req, res) => {
    try{
        const genAI = new GoogleGenerativeAI(process.env.gemini_api);
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const reqText = req.body.text;
        const prompt = `I am posting a photo on Instagram which is about ${reqText}. I want to grow my engagement and reach on this post. Can you suggest some good captions for this post?`;
        console.log(prompt)
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.status(200).json({text})
    }catch(error){
        console.log(error)
    }

}
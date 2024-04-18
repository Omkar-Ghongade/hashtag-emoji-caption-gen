import { pipeline } from "@xenova/transformers"

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
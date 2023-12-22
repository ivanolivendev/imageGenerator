
require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })



const createImage = async(req,res)=>{
    const {prompt,size} = req.body;  


    
    try {

        if(!prompt || !size){
            res.status(500).json({
                succes: false,
                data: "Você precisa definir o tamanho e um prompt de comando"
            })
        }
        
        const image = await openai.images.generate({ 
            prompt: "A cute baby cat",
            size: '512x512' });
    
        const url = image.data[0].url   
       
    
        
    
        res.status(200).json({
            succes:true,
            data: url
                
        })
    } catch (error) {

        console.log(error)
                
        res.status(400).json({
            succes:false,
            data: "image can´t be generated"
                
        })
    }
}

module.exports = {createImage}
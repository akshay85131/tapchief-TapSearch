const Paragraph = require('../model/paragraph')


const ParagraphSave = async (req, res) =>{
    try{
        const text = req.body.paragraphs
        const splitText = text.split(/(?:\r\n){2,}/)
        const result = splitText.map(text=>{
            const paragraph = new Paragraph({
                text:text,
                tags:text.toLowerCase().split(/\s/g)
            })
            const saveParagraph = await Paragraph.create(paragraph)
        })
        res.status(201).send('Saved')
    } catch(error){
        res.status(404).send('something went wrong')
    }
}
const paragraphIndex = async (req, res)=>{
    try{
        const paraIndex = Paragraph.createIndex({ tags: 'text'})
        res.status(200).send({paragraph:[{
            "text": "serach anything to show here"
        }]
    })
    } catch(error){
        console.log(error)
    }
}

const paragraphSearch = async (req, res)=>{
    try{
        const SearchString = req.body.query
        const  
    }
}

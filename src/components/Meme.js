import MemesData from "../components/memesData"
import React from "react"
    
export default function Meme()  {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({...prevMeme,[name]: value}))
    }

    const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

    function generateMeme() {
            const memeArr = allMemeImages.data.memes
            const randomMeme = memeArr[Math.floor(Math.random()* memeArr.length)]
            setMeme(prevMeme => {
                return {
                    ...prevMeme,
                    randomImage: randomMeme.url
                }
            })
        }

    return  (
        <main>
            <div className="form">
                <div>
                    <input value={meme.topText} onChange={handleChange} name="topText" type="text" id="top-text-input" placeholder="Top text"></input>
                    <input value={meme.bottomText} onChange={handleChange} name="bottomText" type="text" id="bottom-text-input" placeholder="Bottom text"></input>
                </div> 
                <button onClick={generateMeme} id="submit-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme-image-container">
                <img src={meme.randomImage} alt="" className="meme-image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
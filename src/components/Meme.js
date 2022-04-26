import MemesData from "../components/memesData"
import React from "react"



    
export default function Meme()  {

    const [memeImage, setState] = React.useState("")

    function generateMeme() {
            const memeArr = MemesData.data.memes
            const randomMeme = memeArr[Math.floor(Math.random()* memeArr.length)]
            console.log(randomMeme.url)
            setState(prevState => randomMeme.url)
        }

    return  (
        <main>
            <div className="form">
                <div>
                    <input type={"text"} id="top-text-input" placeholder="Top text"></input>
                    <input type={"text"} id="bottom-text-input" placeholder="Bottom text"></input>
                </div> 
                <button onClick={generateMeme} id="submit-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme-image-container">
                <img src={memeImage} alt="" className="meme-image"/>
            </div>
        </main>
    )
}
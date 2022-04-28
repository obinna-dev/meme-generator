import MemesData from "../components/memesData"
import React from "react"


/**
    //  * Challenge: Update our state to save the meme-related 
    //  * data as an object called `meme`. It should have the
    //  * following 3 properties: 
    //  * topText, bottomText, randomImage. 
     * 
    //  * The 2 text states can default to empty strings for now, 
    //  * amd randomImage should default to "http://i.imgflip.com/1bij.jpg" 
     * 
    //  * Next, create a new state variable called `allMemeImages` 
    //  * which will default to `memesData`, which we imported above 
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
    
export default function Meme()  {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

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
            // setState(randomMeme.url)
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
                <img src={meme.randomImage} alt="" className="meme-image"/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}
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

    const [allMemes, setAllMemes] = React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => 
            setAllMemes(data.data.memes)
        )
    }, [])

    // console.log(allMemes)

    function generateMeme() {
            const randomMeme = allMemes[Math.floor(Math.random()* allMemes.length)]
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
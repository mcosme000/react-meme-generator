import React, { useState } from 'react';
import data from '../meme_data.js';

const Meme = () => {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/23ls.jpg"
  })

  const memes = data.data.memes;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * memes.length)
    const randomMeme = memes[randomNumber].url
    setMemeImage(prevState => {
      return {
        ...prevState,
        randomImage: randomMeme
      }
    })
  }

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setMemeImage((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form>
        <div className='input-container'>
          <input
            type="text"
            placeholder="Some text"
            autofocus={true}
            name="topText"
            value={memeImage.topText}
            onChange={handleChange}>
          </input>
          <input
            type="text"
            placeholder="Some text"
            autofocus={true}
            name="bottomText"
            value={memeImage.bottomText}
            onChange={handleChange}>
          </input>
        </div>
        <button onClick={handleSubmit} className="button input-btn">Search meme</button>
      </form>
      <div className="image-container">
        <img src={memeImage.randomImage} alt="random meme" className="meme-image"/>
        <h2 className="meme-text top">{memeImage.topText}</h2>
        <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
      </div>
    </div>
  )
};

export default Meme;

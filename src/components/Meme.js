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

  return (
    <div>
      <form>
        <div className='input-container'>
          <input type="text" placeholder="Some text" autofocus={true}></input>
          <input type="text" placeholder="Some text" autofocus={true}></input>
        </div>
        <button onClick={handleSubmit} type="submit" className="button input-btn">Search meme</button>
      </form>
      <div className="image-container">
        <img src={memeImage.randomImage} alt="random meme" className="meme-image"/>
      </div>
    </div>
  )
};

export default Meme;

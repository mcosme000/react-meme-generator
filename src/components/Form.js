import React, { useState } from 'react';
import data from '../meme_data.js';

const Form = () => {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/46hhvr.jpg")
  const memes = data.data.memes;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * memes.length)
    const randomMeme = memes[randomNumber].url
    console.log(randomMeme)
    setMemeImage(randomMeme)
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
      <img src={memeImage} alt="random meme" className="meme-image"/>
    </div>
  )
};

export default Form;

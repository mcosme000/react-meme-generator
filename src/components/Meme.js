import React, { useState, useEffect } from 'react';
import SearchMeme from './SearchMeme';
import Carrousel from './Carrousel';

const Meme = () => {
  const [memeData, setMemeData] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/23ls.jpg",
    memeTitle: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * memeData.length)
    const randomMeme = memeData[randomNumber].url
    setMemeImage(prevState => {
      return {
        ...prevState,
        image: randomMeme,
        memeTitle: memeData[randomNumber].name
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

  const handleSearchMeme = (keyword) => {
    const results = memeData.filter((meme) => {
      return meme.name.toLowerCase().includes(keyword)
    })
    setSearchResults(results)
  }

  useEffect(() => {
    console.log("Ran useEffect")
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setMemeData(data.data.memes))
  }, [])


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
        <button onClick={handleSubmit} className="button input-btn">Get random meme</button>
      </form>
      <SearchMeme handleSubmit={handleSearchMeme}/>
      {searchResults.length > 0 && <Carrousel searchArray={searchResults}/>}
      <div className="image-container">
        <img src={memeImage.image} alt="random meme" className="meme-image"/>
        <h2 className="meme-text top">{memeImage.topText}</h2>
        <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
      </div>
      <p>{memeImage.memeTitle}</p>
    </div>
  )
};

export default Meme;

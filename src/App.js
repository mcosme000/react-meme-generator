import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import SearchForm from './components/SearchForm';
import Image from './components/Image';
import Carrousel from './components/Carrousel'

function App() {
  const [memeData, setMemeData] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/23ls.jpg",
    memeTitle: "Disaster girl"
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
    setSearchResults([])
  }

  const handleSearchSubmit = (keyword) => {
    console.log(keyword)
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
    <div className="App">
      <Header />
      <div className='container'>
        <Form onSubmit={handleSubmit} memeImage={memeImage} setMemeImage={setMemeImage} />
        <SearchForm onSubmit={handleSearchSubmit}/>
        {searchResults.length > 0 ? <Carrousel data={searchResults}/> : <Image data={memeImage}/>}
      </div>
    </div>
  );
}

export default App;

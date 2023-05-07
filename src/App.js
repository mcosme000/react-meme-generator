import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import SearchForm from './components/SearchForm';
import Image from './components/Image';

function App() {
  const [memeData, setMemeData] = useState([])
  const [noResults, setNoResults] = useState(false)
  // const [searchResults, setSearchResults] = useState([])
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
    setNoResults(false)
  }

  const handleSearchSubmit = (keyword) => {
    const results = memeData.filter((meme) => {
      return meme.name.toLowerCase().includes(keyword)
    })

    if (results.length >= 1) {
      setMemeImage(prevState => {
        return {
          ...prevState,
          image: results[0].url,
          memeTitle: results[0].name
        }
      })
    } else {
      setNoResults(true)
    }
  }

  useEffect(() => {
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
        {noResults ? <p>We couldn't find any memes</p> : <Image data={memeImage}/>}
      </div>
    </div>
  );
}

export default App;

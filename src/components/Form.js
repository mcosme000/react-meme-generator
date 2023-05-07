import React from 'react';
// import SearchMeme from './SearchForm';

const Form = ({onSubmit, memeImage, setMemeImage }) => {
  // const [memeData, setMemeData] = useState([])
  // const [searchResults, setSearchResults] = useState([])
  // const [memeImage, setMemeImage] = useState({
  //   topText: "",
  //   bottomText: "",
  //   image: "https://i.imgflip.com/23ls.jpg",
  //   memeTitle: "Disaster girl"
  // })


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

  //   const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const randomNumber = Math.floor(Math.random() * memeData.length)
  //   const randomMeme = memeData[randomNumber].url
  //   setMemeImage(prevState => {
  //     return {
  //       ...prevState,
  //       image: randomMeme,
  //       memeTitle: memeData[randomNumber].name
  //     }
  //   })
  // }

  // const handleSearchMeme = (keyword) => {
  //   const results = memeData.filter((meme) => {
  //     return meme.name.toLowerCase().includes(keyword)
  //   })
  //   setSearchResults(results)
  // }

  // useEffect(() => {
  //   console.log("Ran useEffect")
  //   fetch('https://api.imgflip.com/get_memes')
  //     .then(res => res.json())
  //     .then(data => setMemeData(data.data.memes))
  // }, [])


  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <button onClick={onSubmit} className="button input-btn">Get random meme</button>
      </form>
      {/* <SearchMeme handleSubmit={handleSearchMeme}/> */}
    </div>
  )
};

export default Form;

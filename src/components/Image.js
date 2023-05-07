import React from 'react'

const Image = ({data}) => {
  const {topText, bottomText, image, memeTitle} = data
  return (
    <div>
      <p>{memeTitle}</p>
      <div className="image-container">
        <img src={image ? image : data.url} alt="random meme" className="meme-image"/>
        <h2 className="meme-text top">{topText}</h2>
        <h2 className="meme-text bottom">{bottomText}</h2>
      </div>
    </div>
  )
}

export default Image

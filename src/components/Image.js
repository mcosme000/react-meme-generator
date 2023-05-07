import React from 'react'

const Image = ({data}) => {
  const {topText, bottomText, image, memeTitle} = data

  return (
    <div>
      <h3>{memeTitle}</h3>
      <div className="image-container">
        <img src={image} alt="random meme" className="meme-image"/>
        <h2 className="meme-text top">{topText}</h2>
        <h2 className="meme-text bottom">{bottomText}</h2>
      </div>
    </div>
  )
}

export default Image

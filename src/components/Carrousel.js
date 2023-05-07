import React from 'react'

const Carrousel = ({searchArray}) => {

  const renderImages = searchArray.map((img) => {
    return <img src={img.url} key={img.id} alt="Meme result"/>
  })

  return (
    <div>
      <div>Carrousel</div>
      {renderImages}
    </div>
  )
}

export default Carrousel

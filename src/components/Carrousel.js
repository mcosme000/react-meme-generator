import React from 'react'
import Image from './Image'

const Carrousel = ({data}) => {

  const renderImages = data.map((img) => {
    return <Image data={img} key={img.id} alt="Meme result"/>
  })

  return (
    <div>
      <div>Carrousel</div>
      {renderImages}
    </div>
  )
}

export default Carrousel

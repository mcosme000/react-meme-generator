import React from 'react'
import Image from './Image'

const Carrousel = ({data}) => {

  return (
    <div>
      <p>Showing {data.length} result{data.length > 1 && "s"}:</p>
      <Image data={data[0]} />
      <Image data={data[1]} />
    </div>
  )
}

export default Carrousel

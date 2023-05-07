import React, { useState } from 'react'

const SearchMeme = ({handleSubmit}) => {

  const [keyword, setKeyword] = useState('')
  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(keyword)
    setKeyword('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="search for a meme"
        onChange={handleChange}
        value={keyword}
      />
      <button>Search meme</button>
  </form>
  )
}

export default SearchMeme

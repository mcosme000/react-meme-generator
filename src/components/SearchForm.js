import React, { useState } from 'react'

const SearchForm = ({onSubmit}) => {

  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(keyword)
    setKeyword('')
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="search for a meme"
        onChange={handleChange}
        value={keyword}
      />
      <button className="button input-btn">Search meme</button>
  </form>
  )
}

export default SearchForm

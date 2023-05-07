import React from 'react';

const Form = ({onSubmit, memeImage, setMemeImage }) => {

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

  return (
    <form onSubmit={onSubmit}>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Add some top text"
          autofocus={true}
          name="topText"
          value={memeImage.topText}
          onChange={handleChange}>
        </input>
        <input
          type="text"
          placeholder="Add some bottom text"
          autofocus={true}
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleChange}>
        </input>
      </div>
      <button onClick={onSubmit} className="button input-btn wide-btn">Get random meme</button>
    </form>
  )
};

export default Form;

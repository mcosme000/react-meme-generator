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
        <button onClick={onSubmit} className="button input-btn wide-btn">Get random meme</button>
      </form>
    </div>
  )
};

export default Form;

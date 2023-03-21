import React from 'react';
import data from '../meme_data';

const Form = () => {
  const result = React.useState("Hello")
  console.log(result);
  console.log(data)
  const memes = data.data.memes;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(memes[Math.floor(Math.random() * memes.length)].url)
  }

  return (
    <form>
      <div className='input-container'>
        <input type="text" placeholder="Some text" autofocus={true}></input>
        <input type="text" placeholder="Some text" autofocus={true}></input>
      </div>
      <button onClick={handleSubmit} type="submit" className="button input-btn">Search meme</button>
    </form>
  )
};

export default Form;

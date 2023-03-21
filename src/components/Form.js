import React from 'react';

const Form = () => {
  return (
    <form>
      <div className='input-container'>
        <input type="text" placeholder="Some text"></input>
        <input type="text" placeholder="Some text"></input>
      </div>
      <input type="submit" value="Search meme" className="button input-btn"></input>
    </form>
  )
};

export default Form;

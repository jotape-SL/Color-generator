import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#f54260');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f54260'
          className={`${error ? 'error' : null}`}
        />
        <button className='btn' type='submit'>
          Send
        </button>
      </form>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={`#${color.hex}`}
            />
          );
        })}
      </section>
      ;
    </>
  );
}

export default App;

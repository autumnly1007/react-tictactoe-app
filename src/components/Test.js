import React, { useState } from 'react';

export const Test = () => {
  const [value, setValue] = useState('');
  const [listArray, setListArray] = useState(['haha', 'hoho']);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListArray((prevList) => {
      return [value, ...prevList];
    });
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {listArray.map((item, idx) => (
          <div key={item}>
            <li>{item}</li>
            <input type='text' />
          </div>
        ))}
      </ul>
    </div>
  );
};

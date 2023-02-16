import React, { useState } from 'react';
import { Footer, Header, Main } from '../../components';

export const Bookstore = () => {

  const [search, setSearch] = useState('');
  const [isCountEnable, setIsCountEnable] = useState(false);
  const [count, setCount] = useState(0);

  const counter = () => {
    setIsCountEnable(true);
    setCount(count + 1);
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
}

  return (
    <div>
      <Header count={count} isCountEnable={isCountEnable} handleChange={handleChange} value={search} />
      <Main counter={counter} search={search} />
      <Footer />
    </div>
  )
}
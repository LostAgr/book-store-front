import React, { useState } from 'react';
import { Footer, Header, Main } from '../../components';

export const Bookstore = () => {

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value)
}

  return (
    <div>
      <Header handleChange={handleChange} value={search} />
      <Main search={search} />
      <Footer />
    </div>
  )
}
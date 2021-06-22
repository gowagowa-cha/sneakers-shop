import React from 'react';

const Search = () => {
  return (
    <div className="mb-40 d-flex justify-between align-center">
      <h1>Все кросовки</h1>
      <div className="search__block">
        <img src="/img/search.svg" alt="Search" />
        <input type="text" placeholder="Поиск..." />
      </div>
    </div>
  );
};

export default Search;

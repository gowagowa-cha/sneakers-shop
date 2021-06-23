import React from 'react';

import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className="mb-40 d-flex justify-between align-center">
      <h1>Все кросовки</h1>
      <div className={styles.search__block}>
        <img src="/img/search.svg" alt="Search" />
        <input type="text" placeholder="Поиск..." />
      </div>
    </div>
  );
};

export default Search;

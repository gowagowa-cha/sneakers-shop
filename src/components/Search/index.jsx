import React from 'react';

import styles from './Search.module.scss'

const Search = ({ searchInputValue, setsearchInputValue}) => {

	const onChangeInput = (event) => {
		setsearchInputValue(event.target.value);
	}

  return (
    <div className="mb-40 d-flex justify-between align-center">
      <h1>{searchInputValue ? `Поиск по запросу: "${searchInputValue}"`: 'Все кроссовки'}</h1>
      <div className={styles.search__block}>
        <img className='cu-p' src="img/search.svg" alt="Search" />
        <input onChange={onChangeInput} value={searchInputValue} type="text" placeholder="Поиск..." />
		  {
			searchInputValue &&
			 <img 
			 	onClick={() => setsearchInputValue('')}
				className={styles.clear__btn} 
				width={18} height={18} 
				src='img/exit.png' 
				alt="exit"/>
			}
      </div>
    </div>
  );
};

export default Search;

import React from 'react';
import FormGroup from '../FormGroup/FormGroup';
import styles from './SearchBox.module.css';

function SearchBox({ filter, setFilter }) {
  return (
    <div className={styles.searchBox}>
      <FormGroup
        id="filter"
        label="Find contacts by name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        isControlled
      />
    </div>
  );
}

export default SearchBox;

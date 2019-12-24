import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./SearchBar.scss";

const SearchBar = ({text}) => {
  return (
    <div className="searchbar">
      <div className="search-icon">
       <SearchIcon style={{ fontSize: 15 }}/>
      </div>
      <div className="search-text">
        {text}
      </div>
    </div>
  )
}

export default SearchBar;

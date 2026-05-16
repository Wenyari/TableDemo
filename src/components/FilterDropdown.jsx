import React, { useState } from 'react';
import searchIcon from '../assets/icon_search.png';
import './FilterDropdown.css';

const FilterDropdown = ({ options, selectedOptions, onToggleOption, onClose }) => {
  const [searchText, setSearchText] = useState('');

  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
      <div className="search-box">
        <img src={searchIcon} alt="search" className="icon-search" />
        <input 
          type="text" 
          placeholder="搜索" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="options-list">
        {filteredOptions.map((option, index) => (
          <div 
            key={index} 
            className="option-item"
            onClick={() => onToggleOption(option)}
          >
            <div className={`checkbox ${selectedOptions.includes(option) ? 'checked' : ''}`}>
              {selectedOptions.includes(option) && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="option-text">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;

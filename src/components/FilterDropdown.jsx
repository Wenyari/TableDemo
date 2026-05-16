import React, { useState } from 'react';
import searchIcon from '../assets/icon_search.png';

const FilterDropdown = ({ options, selectedOptions, onToggleOption, onClose }) => {
  const [searchText, setSearchText] = useState('');

  // 1. 搜索过滤选项逻辑
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
            <span className="checkbox">
              {selectedOptions.includes(option) ? '☑' : '☐'}
            </span>
            <span className="option-text">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;

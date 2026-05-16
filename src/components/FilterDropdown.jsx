import React from 'react';

const FilterDropdown = ({ options, selectedOptions, onToggleOption, onClose }) => {
  return (
    <div className="filter-dropdown">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="搜索" />
      </div>
      <div className="options-list">
        {options.map((option, index) => (
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

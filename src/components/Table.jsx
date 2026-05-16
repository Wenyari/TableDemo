import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';

const Table = ({ data }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  // 提取所有的类型作为过滤选项
  const typeOptions = ['AAAA', 'BBBB', 'CCCC', 'DDDD'];

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleToggleOption = (option) => {
    setSelectedTypes(prev => 
      prev.includes(option) 
        ? prev.filter(t => t !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="th col-name">名称</div>
        <div className="th col-type" onClick={toggleFilter}>
          类型 <span className="icon-funnel">▽</span>
          {filterVisible && (
            <FilterDropdown 
              options={typeOptions}
              selectedOptions={selectedTypes}
              onToggleOption={handleToggleOption}
              onClose={() => setFilterVisible(false)}
            />
          )}
        </div>
        <div className="th col-contact">
          联系方式 <span className="icon-funnel">▽</span>
        </div>
      </div>
      <div className="table-body">
        {data.map((row, index) => (
          <div key={row.id} className="table-row">
            <div className="td col-name">{row.name}</div>
            <div className="td col-type">{row.type}</div>
            <div className="td col-contact">{row.contact}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;

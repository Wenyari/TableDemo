import React, { useState, useEffect, useRef } from 'react';
import FilterDropdown from './FilterDropdown';
import filterIcon from '../assets/icon_filter.png';

const Table = ({ data }) => {
  // activeFilterColumn 可以是 'type', 'contact' 或者 null
  const [activeFilterColumn, setActiveFilterColumn] = useState(null);
  
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  
  const headerRef = useRef(null);

  // 提取过滤选项 (去重)
  const typeOptions = Array.from(new Set(data.map(item => item.type)));
  const contactOptions = Array.from(new Set(data.map(item => String(item.contact))));

  // 点击外部关闭弹窗逻辑
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveFilterColumn(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFilter = (e, column) => {
    e.stopPropagation();
    setActiveFilterColumn(activeFilterColumn === column ? null : column);
  };

  const handleToggleType = (option) => {
    setSelectedTypes(prev => 
      prev.includes(option) ? prev.filter(t => t !== option) : [...prev, option]
    );
  };

  const handleToggleContact = (option) => {
    setSelectedContacts(prev => 
      prev.includes(option) ? prev.filter(t => t !== option) : [...prev, option]
    );
  };

  // 根据选中的项过滤表格数据
  const displayData = data.filter(row => {
    const matchType = selectedTypes.length === 0 || selectedTypes.includes(row.type);
    const matchContact = selectedContacts.length === 0 || selectedContacts.includes(String(row.contact));
    return matchType && matchContact;
  });

  return (
    <div className="table-container">
      <div className="table-header" ref={headerRef}>
        <div className="th col-name">名称</div>
        
        <div className="th col-type">
          <div className={`th-content ${activeFilterColumn === 'type' ? 'active' : ''}`} onClick={(e) => toggleFilter(e, 'type')}>
            类型 <img src={filterIcon} alt="filter" className="icon-funnel" />
          </div>
          {activeFilterColumn === 'type' && (
            <FilterDropdown 
              options={typeOptions}
              selectedOptions={selectedTypes}
              onToggleOption={handleToggleType}
              onClose={() => setActiveFilterColumn(null)}
            />
          )}
        </div>
        
        <div className="th col-contact">
          <div className={`th-content ${activeFilterColumn === 'contact' ? 'active' : ''}`} onClick={(e) => toggleFilter(e, 'contact')}>
            联系方式 <img src={filterIcon} alt="filter" className="icon-funnel" />
          </div>
          {activeFilterColumn === 'contact' && (
            <FilterDropdown 
              options={contactOptions}
              selectedOptions={selectedContacts}
              onToggleOption={handleToggleContact}
              onClose={() => setActiveFilterColumn(null)}
            />
          )}
        </div>
      </div>
      
      <div className="table-body">
        {displayData.map((row) => (
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

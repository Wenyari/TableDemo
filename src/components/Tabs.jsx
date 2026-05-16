import React from 'react';

const Tabs = ({ title, tabs, activeTab, onTabChange }) => {
  return (
    <div className="top-nav">
      <div className="header-title">
        <h2 className="title-text">{title}</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <div 
            key={index} 
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
            {activeTab === tab && <div className="tab-indicator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

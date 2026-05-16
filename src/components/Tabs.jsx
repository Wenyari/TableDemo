import React from 'react';

const Tabs = ({ title, tabs, activeTab, onTabChange }) => {
  return (
    <div className="top-nav">
      <div className="header-title">
        <h2>{title}</h2>
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
          </div>
        ))}
        {/* 指示条可以在 CSS 中处理或在这里用一个绝对定位元素 */}
        <div className="tab-indicator"></div>
      </div>
    </div>
  );
};

export default Tabs;

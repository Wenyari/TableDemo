import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import Table from './components/Table';
import './index.css';

// Mock 数据
const mockTableData = [
  { id: 1, name: '整数001', type: 'AAAA', contact: '10887388928' },
  { id: 2, name: '整数002', type: 'BBBB', contact: '10887388928' },
  { id: 3, name: '整数003', type: 'CCCC', contact: '10887388928' },
  { id: 4, name: '整数004', type: 'DDDD', contact: '10887388928' },
];

function App() {
  const [activeTab, setActiveTab] = useState('订单列表');

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Tabs 
          title="Title" 
          tabs={['订单统计', '订单列表']} 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <Table data={mockTableData} />
      </div>
    </div>
  );
}

export default App;

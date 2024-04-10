import React, { useState } from 'react';

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <nav style={{ backgroundColor: '#426B69', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
        <li className={activeTab === 'Home' ? 'active' : ''}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => handleTabClick('Home')}>Home</button>
        </li>
        <li className={activeTab === 'Basic' ? 'active' : ''}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => handleTabClick('Basic')}>Basic</button>
        </li>
        <li className={activeTab === 'Detailed' ? 'active' : ''}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => handleTabClick('Detailed')}>Detailed</button>
        </li>
        <li className={activeTab === 'Contact' ? 'active' : ''}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => handleTabClick('Contact')}>Contact</button>
        </li>
      </ul>
    </nav>
    
  );
}

export default NavigationBar;
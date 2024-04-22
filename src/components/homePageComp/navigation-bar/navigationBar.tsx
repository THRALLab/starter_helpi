import React, { useState } from 'react';


interface NavProp {
  handlePage: (page: string, tabname: string) => void;
}

const NavigationBar: React.FC<NavProp> = ({handlePage}) => {
  const [activeTab] = useState<string>('Home');

  return (
    <div>
    <nav style={{ backgroundColor: '#2c6fbb', padding: '5px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
        <li className={activeTab === 'Home' ? 'active' : ''}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => handlePage('Home', 'Home')}>Home</button>
        </li>
        <li className={activeTab === 'Basic' ? 'active' : ''}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => handlePage('Basic', 'Basic')}>Basic</button>
        </li>
        <li className={activeTab === 'Detailed' ? 'active' : ''}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => handlePage('Detailed', 'Detailed')}>Detailed</button>
        </li>
        <li className={activeTab === 'Contact' ? 'active' : ''}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => handlePage('Contact', 'Contact')}>Contact</button>
        </li>
      </ul>
    </nav>
    </div>
    

  );
}

export default NavigationBar;
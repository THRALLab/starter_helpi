import React, { useState } from 'react';

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <nav>
      <ul className="navigation-list">
        <li className={activeTab === 'Home' ? 'active' : ''}>
          <button onClick={() => handleTabClick('Home')}>Home</button>
        </li>
        <li className={activeTab === 'About' ? 'active' : ''}>
          <button onClick={() => handleTabClick('About')}>About</button>
        </li>
        <li className={activeTab === 'Services' ? 'active' : ''}>
          <button onClick={() => handleTabClick('Services')}>Services</button>
        </li>
        <li className={activeTab === 'Contact' ? 'active' : ''}>
          <button onClick={() => handleTabClick('Contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

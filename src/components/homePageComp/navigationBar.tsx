import React, { useState } from 'react';
import BasicQuestions from '../../pages/BasicQuestions';
import DetailedQuestions from '../../pages/DetailedQuestions';
import Home from '../../pages/Home';

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [page, setPage] = useState(0);


  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    if(tabName === 'Home') {
      setPage(0)
    }
    else if(tabName === 'Basic') {
      setPage(1)
    }
    else if(tabName === 'Detailed') {
      setPage(2)
    }
  };

  return (
    <div>
    <nav style={{ backgroundColor: '#426B69', padding: '5px' }}>
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
    {page === 0 ? <Home /> : page === 1 ? <BasicQuestions /> : <DetailedQuestions />}
    </div>
  );
}

export default NavigationBar;
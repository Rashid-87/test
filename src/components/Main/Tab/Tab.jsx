import './tab.scss';
import TabCard from './TabCard';
import React, { useState } from 'react';
import tab from './../../../../src/img/tab/tab.png'
import tab1 from './../../../../src/img/tab/tab1.png'
import tab2 from './../../../../src/img/tab/tab2.png'

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section className='tab'>
      <div className="container">
        <h2 className="tab__title">Tab Section</h2>
        <h3 className="tab__subtitle">This is some text inside of a div block.</h3>
        <div className="tab__wrapper">
          <button className={`tab__btn ${activeTab === 0 && 'tab__active'}`} type='button' onClick={() => handleTabClick(0)} >Tab Button 1</button>
          <button className={`tab__btn ${activeTab === 1 && 'tab__active'}`} type='button' onClick={() => handleTabClick(1)} >Tab Button 2</button>
          <button className={`tab__btn ${activeTab === 2 && 'tab__active'}`} type='button' onClick={() => handleTabClick(2)} >Tab Button 3</button>
        </div>
        {activeTab === 0 && ( <TabCard img={tab} text='Some Title Here1' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' /> )}
        {activeTab === 1 && ( <TabCard img={tab1} text='Some Title Here2' desc='Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' /> )}
        {activeTab === 2 && ( <TabCard img={tab2} text='Some Title Here3' desc='Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' /> )}
      </div>
    </section>
  );
};

export default Tab;

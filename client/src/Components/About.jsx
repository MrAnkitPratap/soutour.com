


import React from 'react'; 

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">Experience The Wonder Of The Statue Of Unity</h1>
      
      <div className='cards-container'>
        <div className='cards'>
          <img src="https://i.postimg.cc/7LM97yvL/Cactus-Garden-4.jpg" alt="cards" className='cards-image'/>
          <div className="cards-content">
            <h2>Explore the breathtaking 40 square kilometer area surrounding the Statue of Unity with our guided golf cart tours</h2>
            <h1>Arogyavan</h1>
          </div>
        </div>

        <div className='cards'>
          <img src="https://i.postimg.cc/6qH1ZxvZ/img10.jpg" alt="cards" className='cards-image'/>
          <div className="cards-content">
            <h2>Skip the bus and enjoy the freedom to visit over 20 tourist attractions at your leisure. Our knowledgeable driver and guide will ensure a memorable and personalized experience.</h2>
            <h1>Arogyavan</h1>
          </div>
        </div>

        <div className='cards'>
          <img src="https://i.postimg.cc/nzX1W9jX/GP-0062.jpg" alt="cards" className='cards-image' />
          <div className="cards-content">
            <h2>Our all-inclusive package includes a knowledgeable driver and guide, allowing you to relax and enjoy the tour without any worries. Book your tour online today!</h2>
            <h1>Arogyavan</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import wa11y from './images/wa11y.png';
import Chart from './PieChart.jsx';

export default function Main() {
  return (
    <div className="main">
      <div id="introduction" className="mainChild">
        <h1>Welcome to equa11y!</h1>
        <p className="introP">
          We believe the internet is for everyone. However, there are many groups who find
          themselves excluded from accessing the web. Our mission is to use our skills and abilities
          to build tools that help make the internet a more accessible place.
        </p>
      </div>
      <div className="main-cards">
        <div id="useSite" className="mainChild">
          <h2>What You'll Find Here</h2>
          <p>
            Team Equa11y is all about sharing our passion for web accessibility. If you check out
            the Example Page, you can take a tour of common accessibility errors found on many
            websites. If you visit our Useful Links tab, we'll share some great resources with you
            and connect you to some really helpful development tools that can assist you in making
            your applications accessible to most.
          </p>
        </div>
        <div id="accessImportance" className="mainChild">
          <h2>Why is accessibility important?</h2>
          <p>
            It is estimated that 15% of the world’s population experiences some form of disability.
            That's an estimated 1 billion human beings. Of that percentage nearly 285 million
            individuals experience some form of visual impairment. Without accessibility
            considerations, only 85% of users will be able to access your website. Keeping
            accessibility features in mind during the development process will allow those who use
            assistive technology to access the internet to use your applications.
          </p>
          <Chart />
        </div>
        <div id="wa11yDog" className="mainChild">
          <h2>This is Wa11y, the Equa11y dog!</h2>
          <p>
            He's here to guide you on your accessibility journey. He's a good boy and a very loyal
            companion. We think he's pretty darn cute.
          </p>
          <img src={wa11y} alt="dog with name wally" width="500" height="500"></img>
        </div>
      </div>
    </div>
  );
}

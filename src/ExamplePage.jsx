/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import ColorContrast from './components/ColorContrast';
import IntroCard from './components/IntroCard';
import MorphButton from './components/MorphButton';
import HeaderOrganization from './components/HeaderOrganization';
import Justified from './components/ExcessivelyJustified';
import InnerSiteFooter from './components/Footer_bad';
import ExampleAbout from './components/ExampleAbout';
import ReferBy from './components/ReferBy';
import HorizontalScroll from './components/HorizontalScroll';
import url from './images/url.png';

export default function ExamplePage() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section className="innerMainPage">
      <div id="innerPage">
        <div id="urlBar">
          <img id="fakeUrl" alt="a fake url bar for our demo website below at Wally's world of websites." src={url} />
        </div>
        <div className="innerHeader">
          <div>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setIsClicked(false);
                  }}
                  className="plain-button"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsClicked(true);
                  }}
                  className="plain-button"
                >
                  About
                </button>
              </li>
            </ul>
          </div>
          <header>
            <h2>Why Accessibility?</h2>
          </header>
        </div>
        {!isClicked && (
          <div>
            <IntroCard />
            <div id="innerMain">
              <ColorContrast />
              <MorphButton />
              <HeaderOrganization />
              <Justified />
              <ReferBy />
              <HorizontalScroll />
            </div>
            <InnerSiteFooter />
          </div>
        )}
        {isClicked && <ExampleAbout />}
      </div>
    </section>
  );
}

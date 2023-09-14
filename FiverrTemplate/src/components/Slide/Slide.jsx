import React from "react";
import "./Slide.scss";
import { cards } from '../../data';
import { Link } from "react-router-dom";
import ScrollCarousel from 'scroll-carousel-react';

const Slide = () => {

  new ScrollCarousel(".my-carousel", { autoplay: true });

  return (
    <div className="slide-section">
      <ScrollCarousel autoplay autoplaySpeed={8} speed={7} onReady={() => console.log('I am ready')}>
        {cards.map(({ id_key, title, desc, img }) => (
          <div key={id_key} className='item'>
            <span className="title">{ title }</span>
            <p className="desc">{ desc }</p>
            <Link to="/gigs?cat=design">
              <img src={ img } alt={ id_key }/>
            </Link>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default Slide;
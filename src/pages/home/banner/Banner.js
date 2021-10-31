import React from 'react';
import { Carousel} from 'react-bootstrap';
import banner1 from '../../../Banner/bichnakandi.jpg';
import banner2 from '../../../Banner/lalakhal.jpg';
import banner3 from '../../../Banner/2.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div className=" col-lg-12 col-md-8 col-sm-4">
            <Carousel>
            <Carousel.Item>
               <img
                 className="d-block w-100 img"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="font-color">BISNAKHANDI</h3>
      <p className="font-color">This is where many layers of the Khasi mountain meet at a single point from both sides. Flowing from above is a high fall. Adding to its charm are dark clouds hugging the mountain in the rainy season.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="font-color">LALAKHAL</h3>
      <p className="font-color">A tourist can experience green water river, Range of mountain and Tea Garden- at once in Lalakhal.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="font-color">RATARGUL</h3>
      <p className="font-color"> A dense forest comprising mostly native hijol and koroch trees, Ratargul offers a sanctuary for different species of birds, monkeys, snakes and other reptiles.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Banner;
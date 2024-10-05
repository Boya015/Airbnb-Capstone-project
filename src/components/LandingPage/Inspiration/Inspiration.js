import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  return (
    <div className="inspiration-container">
      {/* Section 1: Cards Section */}
      <div className="cards-section">
        <h2>Inspiration for your next trip</h2>
        <div className="cards-row">
          <div className="city-card sandton-city">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-15884640/original/47cd412f-c7f9-455f-a1a0-2c57782e3338.jpeg?im_w=960" alt="Sandton City Hotel" />
            <div className="card-info">
              <h3>Sandton City Hotel</h3>
              <p>53 km away</p>
            </div>
          </div>
          <div className="city-card joburg-city">
            <img src="https://tse4.mm.bing.net/th?id=OIP.i8WYCi9tNoDTeNXlKKXoFgHaEA&pid=Api&P=0&h=220" alt="Joburg City Hotel" />
            <div className="card-info">
              <h3>Joburg City Hotel</h3>
              <p>168 km away</p>
            </div>
          </div>
          <div className="city-card woodmead">
            <img src="https://tse4.mm.bing.net/th?id=OIP.CWOlXNZhNC9zzxeXAGDTyAHaEK&pid=Api&P=0&h=220" alt="Woodmead Hotel" />
            <div className="card-info">
              <h3>Woodmead Hotel</h3>
              <p>30 miles away</p>
            </div>
          </div>
          <div className="city-card hyde-park">
            <img src="https://tse3.mm.bing.net/th?id=OIP.VCrznv1DFYirVwc57CzFGQHaE7&pid=Api&P=0&h=220" alt="Hyde Park Hotel" />
            <div className="card-info">
              <h1>Hyde Park Hotel</h1>
              <p>34 km away</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Discover Airbnb Experiences */}
      <div className="discover-experiences">
        <h2>Discover Airbnb Experiences</h2>
        <div className="experiences-row">
          <div className="experience-image trip">
            <img src="https://th.bing.com/th/id/OIP.-m9mMkAIhOcpOYnZloEd2AHaE1?rs=1&pid=ImgDetMain" alt="Things to do on your trip" />
            <div className="experience-info">
              <h3>Things to do on your trip</h3>
              <button>Experiences</button>
            </div>
          </div>
          <div className="experience-image home">
            <img src="https://tse1.mm.bing.net/th?id=OIP.KM7fmephhc7LgjwZ6Fap3wHaE8&pid=Api&P=0&h=220" alt="Things to do from home" />
            <div className="experience-info">
              <h3>Things to do from home</h3>
              <button>Online Experiences</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Shop Airbnb Gift Cards */}
      <div className="gift-cards-section">
        <div className="gift-cards-content">
          <div className="left-content">
            <p>Shop Airbnb gift cards</p>
            <button>Learn more</button>
          </div>
          <img src="https://a0.muscache.com/im/pictures/1cf5a439-d6df-4ba3-b1be-27eeb68707b4.jpg" alt="Airbnb gift cards" className="gift-cards-image"/>
        </div>
      </div>

      {/* Section 4: Questions about Hosting */}
      <div className="hosting-section">
        <img src="https://join.casiola.com/wp-content/uploads/2019/03/superhost-interior.jpg" alt="Questions about hosting?" />
        <div className="hosting-content">
          <h4>Questions about hosting?</h4>
          <button>Ask a Superhost</button>
        </div>
      </div>

      {/* Section 5: Pre-footer */}
      <div className="pre-footers">
        <h2>Inspiration for future getaways</h2>
        <div className="getaways-links">
          <a href="#">Destinations for arts & culture</a>
          <a href="#">Destinations for outdoor adventure</a>
          <a href="#">Mountain cabins</a>
          <a href="#">Beach destinations</a>
          <a href="#">Popular destinations</a>
          <a href="#">Unique Stays</a>
        </div>
        <div className="destinations">
          <div>
            <h3>Phoenix</h3>
            <p>Arizona</p>
          </div>
          <div>
            <h3>Hot Springs</h3>
            <p>Arkansas</p>
          </div>
          <div>
            <h3>Los Angeles</h3>
            <p>California</p>
          </div>
          <div>
            <h3>San Diego</h3>
            <p>California</p>
          </div>
          <div>
            <h3>San Francisco</h3>
            <p>California</p>
          </div>
          <div>
            <h3>Barcelona</h3>
            <p>Catalonia</p>
          </div>
          <div>
            <h3>Prague</h3>
            <p>Czechia</p>
          </div>
          <div>
            <h3>Washington</h3>
            <p>District of Columbia</p>
          </div>
          <div>
            <h3>Keswick</h3>
            <p>England</p>
          </div>
          <div>
            <h3>London</h3>
            <p>England</p>
          </div>
          <div>
            <h3>Scarborough</h3>
            <p>England</p>
          </div>
          <div>
            <h3><a href="#">Show more</a></h3>
          </div>
        </div>
      </div>

      {/* Section 6: Footer */}
      <div className="footers">
        <div className="footer-sections">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety information</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Our COVID-19 Response</a></li>
            <li><a href="#">Supporting people with disabilities</a></li>
            <li><a href="#">Report a neighborhood concern</a></li>
          </ul>
        </div>
        <div className="footer-sections">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Airbnb.org: disaster relief housing</a></li>
            <li><a href="#">Support: Afghan refugees</a></li>
            <li><a href="#">Celebrating diversity & belonging</a></li>
            <li><a href="#">Combating discrimination</a></li>
          </ul>
        </div>
        <div className="footer-sections">
          <h4>Hosting</h4>
          <ul>
            <li><a href="#">Try hosting</a></li>
            <li><a href="#">AirCover: protection for Hosts</a></li>
            <li><a href="#">Explore hosting resources</a></li>
            <li><a href="#">Visit our community forum</a></li>
            <li><a href="#">How to host responsibly</a></li>
          </ul>
        </div>
        <div className="footer-sections">
          <h4>About</h4>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Learn about new features</a></li>
            <li><a href="#">Letter from our founders</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Airbnb Luxe</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Inspiration;

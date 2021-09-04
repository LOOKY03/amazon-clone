import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1239991212"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
        <Product
          id="1230003445"
          title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel"
          price={499.95}
          rating={4}
          image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="193121243998"
          title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof"
          price={35.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51oAPLRW9DL._AC_UY218_.jpg"
        />
        <Product
          id="123126643"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
        <Product
          id="1231212857373"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345451212"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import PreLoader from '../components/PreLoader';

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch brand data from API
    axios.get('/get-all-brands')
      .then(response => {
        setBrands(response.data.brands)
        setIsLoading(false)
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
      return <PreLoader />
  }

  return (
   <>
   <style>
    {`
    /* Brands.css */
    .brands-background {
      // background-image: url('https://wallpapers.com/images/featured/light-blue-2iuzyh711jo9bmgo.jpg'); /* Update with your image path */
      background-size: cover;
      /* Add other styling properties as needed */
    }
    
    `}
   </style>
    <div  className="container my-5 brands-background">
    <div className="container my-5">
      <div className="text-center">
        <h2>Brands</h2>
        <small className="text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </small>
      </div>

      <div className="row justify-content-center my-5" > {/* Center the cards */}
        {brands.map((brand, index) => (
          <div key={index} className="col-md-4 mb-4" >
            <div className="card " style={{background:'lightblue'}}>
              {/* <div className="card-img-container">
                <img
                  src={brand.BrandImage}
                  className="card-img-top"
                  alt={brand.BrandName}
                  style={{  height: '400px', objectFit: 'cover' }}
                />
              </div> */}
              <div className="card-body">
                <h5 className="card-title">{brand.BrandName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {brand.BrandSubtitle}
                </h6>
                <p className="card-text">{brand.BrandDescription}</p>
                <a href={brand.CardLink1} className="card-link">
                  {brand.CardLinkText1}
                </a>
                <a href={brand.CardLink2} className="card-link">
                  {brand.CardLinkText2}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </div>
   </>
  );
}

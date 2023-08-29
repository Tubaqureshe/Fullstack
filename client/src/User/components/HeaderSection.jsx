
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderSection() {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.wjbf.com/wp-content/uploads/sites/47/2023/02/1040x585-2022-0113-best-ysl-cologne-for-men-81af80-1.jpg?w=1040&h=585&crop=1" height={650}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidperfumes.com/image/cache/catalog/website%20banner-950x500h.jpg" height={650}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/zinodavidoff/image/upload/v1654769222/2022-06/DAV_CW_REB_22_CPV_CW_M_InStore_16-9.jpg" height={650}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  )
}
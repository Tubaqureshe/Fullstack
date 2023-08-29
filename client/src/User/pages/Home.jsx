// import React from 'react';

// export default function Home() {
//   return (
//     <div className="container">
//       <div className="card text-bg-dark">
//         <div>
//           <img
//             src="https://t4.ftcdn.net/jpg/01/97/39/87/360_F_197398718_d7y8xPgEKRSMliHLwybXrOJHwWOHqQNK.jpg"
//             className="card-img"
//             alt="..."
//             style={{ width: '400%', height: '500px', objectFit: 'cover' }}
//           />
//           <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
//             <h5 className="card-title">Best Quality</h5>
//             <p className="card-text">
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This content is a little bit longer.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="container my-4">
//         <h2 className='text-center'>About us</h2>
//         <div className="card-group gap-4"> {/* Added gap-4 class for gap */}
//         <div className="card">
//       <img src="https://www.rios.pk/cdn/shop/products/Perfume-EDP-X-Louis-For-Men-100ml-RIOS-860.jpg?v=1675457835" className="card-img-top" alt="..." />
      
//     </div>
//     <div className="card">
//       <img src="https://uniworthdress.com/uploads/product/MGPF2206..jpg " className="card-img-top"  alt="..." />
//     </div>
//     <div className="card">
//       <img src="https://www.rios.pk/cdn/shop/products/Perfume-EDP-Elegance-For-Men-100ml-RIOS-618.jpg?v=1675457830" className="card-img-top" alt="..." />
      
//     </div>
//           {/* Add more cards here */}
//         </div>
//       </div>
//       <div  className="container my-4">
//         <h1>Contact Us</h1>
//       <div className="card mb-3" style={{ maxWidth: 540 }}>
//     <div className="row g-0">
//       <div className="col-md-4">
//         <img src="https://conaturalintl.com/cdn/shop/products/CrystalRose.jpg?v=1656311531" className="img-fluid rounded-start" alt="..." />
//       </div>
//       <div className="col-md-8">
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </p>
//           <p className="card-text">
//             <small className="text-body-secondary">
//               Last updated 3 mins ago
//             </small>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'
import HeaderSection from '../components/HeaderSection'
import Services from '../components/Service'
import About from '../components/About'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
  return (
    <div><HeaderSection />
  <About />
<Card />
   <Services />
   <Footer />
    </div>
  )
}


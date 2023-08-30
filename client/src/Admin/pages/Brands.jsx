import React, { useEffect, useState } from 'react';
import BrandsModal from '../components/BrandsModal';
import axios from 'axios';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';



export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = () => {
    axios
      .get('/get-all-brands')
      .then((response) => setBrands(response.data.brands))
      .catch((error) => console.log(error));
  };

  const deleteBrand = (_id) => {
    axios
      .delete('/delete-brand', { data: { _id } })
      .then(() => {
        fetchBrands();
        setSuccessMessage('Brand deleted successfully');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000); // Display for 3 seconds
      })
      .catch((error) => console.log(error));
  };

  const updateBrand = (_id, newData) => {
    axios
      .put('/api/update-brand', { _id, ...newData })
      .then(() => {
        fetchBrands();
        setSuccessMessage('Brand updated successfully');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000); // Display for 3 seconds
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="position-fixed top-0 end-0 p-3">
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between align-items-center my-2 p-2" style={{background:'lightblue' }}>
        <span className="fs-4 fw-bold text-black">Brands</span>
        <BrandsModal recallData={setBrands} />
      </div>
      <div className="container">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Brand Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((val, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{val._id}</td>
                <td>{val.BrandName}</td>
                <td>
                  <img src={val.BrandImage} className='img-fluid rounded-circle' style={{height: '70px', width: '90px' }} alt="" />
                </td>
                <td>
                  <button
                    className='btn btn-light mx-1' style={{width:'50px'}}
                    onClick={() => {
                      const newBrandName = prompt('Enter new Brand Name:', val.BrandName);
                      const newBrandImage = prompt('Enter new Brand Image URL:', val.BrandImage);
                      if (newBrandName && newBrandImage) {
                        updateBrand(val._id, {
                          BrandName: newBrandName,
                          BrandImage: newBrandImage,
                        });
                      }
                    }}
                  >
                    <BsFillPencilFill  />
                  </button>
                  <button className='btn btn-light mx-1' style={{width:'50px'}} onClick={() => deleteBrand(val._id)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



// import React, { useEffect, useState } from 'react';
// import BrandsModal from '../components/BrandsModal';
// import axios from 'axios';
// import { BsFillPencilFill } from 'react-icons/bs';
// import { AiFillDelete } from 'react-icons/ai';



// export default function Brands() {
//   const [brands, setBrands] = useState([]);
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   const fetchBrands = () => {
//     axios
//       .get('/api/get-all-brands')
//       .then((response) => setBrands(response.data.brands))
//       .catch((error) => console.log(error));
//   };

//   const deleteBrand = (_id) => {
//     axios
//       .delete('/api/delete-brand', { data: { _id } })
//       .then(() => {
//         fetchBrands();
//         setSuccessMessage('Brand deleted successfully');
//         setTimeout(() => {
//           setSuccessMessage('');
//         }, 3000); // Display for 3 seconds
//       })
//       .catch((error) => console.log(error));
//   };

//   const updateBrand = (_id, newData) => {
//     axios
//       .put('/api/update-brand', { _id, ...newData })
//       .then(() => {
//         fetchBrands();
//         setSuccessMessage('Brand updated successfully');
//         setTimeout(() => {
//           setSuccessMessage('');
//         }, 3000); // Display for 3 seconds
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <div className="position-fixed top-0 end-0 p-3">
//         {successMessage && (
//           <div className="alert alert-success" role="alert">
//             {successMessage}
//           </div>
//         )}
//       </div>
//       <div className="d-flex justify-content-between align-items-center bg-primary my-2 p-2">
//         <span className="fs-4 fw-bold text-white">Brands</span>
//         <BrandsModal recallData={setBrands} />
//       </div>
//       <div className="container">
//         <table className="table text-white">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">ID</th>
//               <th scope="col">Brand Name</th>
//               <th scope="col">Brand Image</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {brands?.map((val, index) => (
//               <tr key={index}>
//                 <th scope='row'>{index + 1}</th>
//                 <td>{val._id}</td>
//                 <td>{val.BrandName}</td>
//                 <td>
//                   <img src={val.BrandImage} className='img-fluid rounded-circle' style={{height: '70px', width: '90px' }} alt="" />
//                 </td>
//                 <td>
//                   <button
//                     className='btn btn-light mx-1' style={{width:'50px'}}
//                     onClick={() => {
//                       const newBrandName = prompt('Enter new Brand Name:', val.BrandName);
//                       const newBrandImage = prompt('Enter new Brand Image URL:', val.BrandImage);
//                       if (newBrandName && newBrandImage) {
//                         updateBrand(val._id, {
//                           BrandName: newBrandName,
//                           BrandImage: newBrandImage,
//                         });
//                       }
//                     }}
//                   >
//                     <BsFillPencilFill  />
//                   </button>
//                   <button className='btn btn-light mx-1' style={{width:'50px'}} onClick={() => deleteBrand(val._id)}>
//                     <AiFillDelete />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

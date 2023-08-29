// import React, { useEffect, useState } from 'react'
// import GuestCards from './GuestCards'
// import axios from 'axios'

// export default function Category() {
//     const [categories, setcategories] = useState([])

//     useEffect(() => {
//         axios.get('/get-all-categories')
//             .then(json => setcategories(json.data.categories))
//             .catch(err => alert(err.message))
//     }, [])




//     return (
//         <div className="container my-5 md-4">
//             <div className="text-center">
//                 <h2>categories</h2>
//                 <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
//             </div>

//             <div className="row my-5">
//                 {
//                     categories?.map((val, key) => <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName}  />)
//                 }

//             </div>
//         </div>
//     )
// }




import React, { useState, useEffect } from 'react';
// import UserCards from '../Components/UserCards';
import CategoryCard from './CategoryCard';
import axios from 'axios';

export default function Category() {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/get-all-categories');
            setCategoryData(response.data.category);
        } catch (error) {
            console.error(error);
        }
    };

    return (
       <>

       <style>
        {`
        /* CategoryCard.css */

        .card {
          transition: transform 0.2s; /* Add smooth transition */
        }
        
        .card:hover {
          transform: scale(1.09); /* Scale up the card on hover */
        }
        
        `}
       </style>
        <div className="container my-5 md-4">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
            </div>
            
            <div className="row md-4 mb-4">
                {categoryData.map((category) => (
                    <CategoryCard
                        key={category._id}
                        image={category.categoryImage}
                        name={category.categoryName}
                    />
                ))}
            </div>
          
        </div>
       </>
    );
}

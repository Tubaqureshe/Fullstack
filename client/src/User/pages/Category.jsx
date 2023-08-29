import React, { useState, useEffect } from 'react';
import UserCards from '../Components/UserCards';
import axios from 'axios';
import Footer from '../components/Footer';
import PreLoader from '../components/PreLoader';

export default function Category() {
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/get-all-categories');
            setCategoryData(response.data.category);
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoading) {
        return <PreLoader />
    }

    return (
       <>
        <div className="container my-5 md-4">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
            </div>
            
            <div className="row md-4 mb-4">
                {categoryData.map((category) => (
                    <UserCards
                        key={category._id}
                   
                        image={category.categoryImage}
                        name={category.categoryName}
                    />
                ))}
            </div>
            <Footer />
        </div>
       </>
    );
}

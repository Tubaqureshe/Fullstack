import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from '../utils/axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
export default function Category() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const [category, setCategory] = useState([])

    useEffect(() => {
        getAllCategories()
    }, []);


    const getAllCategories = async () => {
        try {
            const { data: { category } } = await axios.get('/get-all-categories');
            setCategory(category);
        } catch (error) {
            console.error(error)
        }
    }

    const editCategory = (category) => {
        setSelectedCategory(category);
        setModalOpen(true)
    };

    const handleClose = () => {
        setSelectedCategory(null);
        setModalOpen(false);
    };

    const deleteCategory = async (_id) => {
        if (!confirm('are you sure to delete!')) return;

        try {
            await axios.delete(`/delete-category/${_id}`);
            await getAllCategories(); // Fetch updated categories after deletion
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center  p-2 my-3 rounded" style={{ background: 'lightblue' }}>
                <span className='fs-4 fw-bold text-black'>Categories</span>
                <CategoryModal
                    show={modalOpen}
                    onCreated={getAllCategories}
                    editCategory={selectedCategory}
                    handleShow={() => setModalOpen(true)}
                    handleClose={handleClose}
                />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Image</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category?.map((val, key) =>
                                <tr key={key}>
                                    <td>{val.categoryName}</td>
                                    <td><img src={val.categoryImage} className='img-fluid rounded-circle' style={{ height: '15vh', objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <td>
                                        <button className="btn btn-dark mx-1" onClick={() => editCategory(val)}><BsFillPencilFill /></button>
                                        <button className="btn btn-dark mx-1" onClick={() => deleteCategory(val._id)}><AiFillDelete /></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}
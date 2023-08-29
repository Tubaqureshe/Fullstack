import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';

function CategoryModal({ onCreated, editCategory, show, handleClose, handleShow }) {
  const [categoryName, setCategoryName] = useState(editCategory ? editCategory.categoryName : '');
  const [categoryImage, setCategoryImage] = useState(editCategory ? editCategory.categoryImage : '');


  useEffect(() => {
    if (editCategory) {
      setCategoryName(editCategory.categoryName)
    }
  }, [editCategory]);

  const handleCategoryImageChange = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const AddCategory = async (e) => {
    e.preventDefault();

    if(!categoryImage) { return alert('Please provide image') }

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `category_images/${categoryImage.name}`);
      await uploadBytes(storageRef, categoryImage);

      // Get the download URL of the uploaded image
      const imageURL = await getDownloadURL(storageRef);

      // Create the category data
      const categoryData = {
        categoryName,
        categoryImage: imageURL,
      };

      if (editCategory) {
        // Update category
        try {
          await axios.put(`/update-category/${editCategory._id}`, categoryData);
        } catch (error) {
          console.error(error);
        }
      } else {
        // Create category
        try {
          await axios.post('/create-category', categoryData);
        } catch (error) {
          console.error(error);
        }
      }

      await onCreated();
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button variant="dark" onClick={() => handleShow()}>
        Add Category
      </Button>

      <Modal show={show} onHide={e => handleClose(false)} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{!editCategory? 'Add': 'Edit'} Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={AddCategory}>
            <div className="mb-3">
              <label htmlFor="CategoryName" className="form-label">
                Category Name
              </label>
              <input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                className="form-control"
                id="CategoryName"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Category Image
              </label>
              <input
                className="form-control"
                onChange={handleCategoryImageChange}
                type="file"
                id="formFile"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CategoryModal;

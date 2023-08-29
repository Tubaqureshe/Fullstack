import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { storage } from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { Spinner } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component
// import { AppRoute } from '../../App';


function BrandsModal({ recallData }) {
  const [show, setShow] = useState(false);
  const [brandName, setBrandName] = useState('');
  const [brandImage, setBrandImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addBrand = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const storageRef = ref(storage, `images/brands/${brandImage.name}`);
    uploadBytes(storageRef, brandImage).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          const payload = {
            BrandName: brandName,
            BrandImage: url,
          };

          axios
            .post('/create-brand', payload)
            .then((json) => {
              setIsLoading(false); // Stop loading
              setShow(false);
              recallData(json.data.brands);
              Swal.fire({
                icon: 'success',
                title: 'Brand Added Successfully',
                showConfirmButton: false,
                timer: 3000,
              });
            })
            .catch((err) => {
              setIsLoading(false); // Stop loading
              console.error(err);
              alert(err.message);
            });
        })
        .catch((error) => {
          setIsLoading(false); // Stop loading
          alert(error.message);
        });
    });
  };

  return (
    <>
      <Button variant="dark" style={{ width: '140px' }} onClick={handleShow}>
        Add Brand
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <form onSubmit={addBrand}>
              <div className="mb-3">
                <label htmlFor="BrandName" className="form-label">
                  Brand Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="BrandName"
                  aria-describedby="brandnameHelp"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Brand Image
                </label>
                <input
                  className="form-control"
                  onChange={(e) => setBrandImage(e.target.files[0])}
                  type="file"
                  id="formFile"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Brand
              </button>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BrandsModal;
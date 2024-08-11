import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const notify = () => {
    toast.success("Checout Successfully !", {
      position: "top-right"
    });
    setTimeout(()=>{
      navigate("/yard/Dashboard")
    },1500)

  };
  const handleScanClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPage(true);
    }, 3000);
  };

  return (
    <div className="container-fluid">
     <ToastContainer />
      <div className="row">
        <div className="col-md-6 mt-5 d-flex flex-column align-items-center">
        <div className="card">
        <div className="fs-3 fw-semibold font-monospace ms-5 mt-3">Scan Vehicle Qr Code</div>
          <div className="input-group mb-3 w-75 mt-4 ms-3">
            <label className="input-group-text" htmlFor="inputGroupFile01">
              Upload QR CODE
            </label>
            <input
              type="file"
              className="form-control"
              id="inputGroupFile01"
              onChange={handleImageUpload}
            />
          </div>
          {selectedImage && (
            <div className="mt-3 mb-3 d-flex flex-column align-items-center">
              <img
                src={selectedImage}
                alt="Uploaded"
                style={{ height: "230px", width: "250px" }}
              />
              <br />
              <div class="d-grid gap-2 col-6 mx-auto">
              <div
                className="btn btn-success"
                onClick={handleScanClick}
              >
                Scan File
              </div>
              </div>
            </div>
          )}
        </div>
        </div>
        <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
          {loading && (
            <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
            
          )}
          {page && (
            <div className="card w-75 p-4">
              <div className="fs-2 fs-semibold font-monospace text-center mt-1">
                Vehicle Checkout
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Vehicle Number
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={"UPHF0533"}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Driver Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={"Mohit Nandan"}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Driver ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={"CLVPN90894"}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Vehicle Weight
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={"300 TON"}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Vehicle Model
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={"TATA cargo"}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Net Weight
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={"100 TON"}
                  readOnly
                />
              </div>
              <button type="submit" className="btn btn-success mb-5" onClick={notify}>
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Checkout;

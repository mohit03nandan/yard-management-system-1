import React, { useState, useEffect } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./checkin.css";
import { heIL } from "@mui/x-date-pickers/locales";

const Checkin = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [page1, setpage1] = useState(true);
  const [page2, setpage2] = useState(false);
  const [page3, setpage3] = useState(false);
  const [page4, setpage4] = useState(false);

  const setpagination = () => {
    setpage1(false);
    setpage2(true);
  };

  const setpagination1 = () => {
    setpage3(true);
    setpage2(false);
  };

  const finalsubmit = () => {
    setpage3(false);
    setpage4(true);
  };

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

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const notify = () => {
    toast.success("Vehicle Loading !", {
      position: "top-right"
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-item-center">
    <ToastContainer />
      {page1 && (
        <div
          class="card"
          style={{
            marginTop: "10px",
            width: "80%",
            marginLeft: "120px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
         <div className="fs-2 fs-semibold font-monospace text-center mt-1" > Vehicle Registration</div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Vehicle Number
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="UP78***"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Vehicle Weight
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="123 metric ton"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Vehicle Model
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Toyota"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Net Weight
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="123"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Assigned Parking Lot
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Assigned Dock Lot
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="1"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupFile01">
                Upload Vehicle Image
              </label>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                onChange={handleImageUpload}
              />
            </div>

            {selectedImage && (
              <div className="mt-3 mb-3">
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            class="btn btn-primary mb-5"
            onClick={setpagination}
          >
            Submit
          </button>
        </div>
      )}

      {page2 && (
        <div
          class="card"
          style={{
            marginTop: "10px",
            width: "80%",
            marginLeft: "120px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
        <div className="fs-2 fs-semibold font-monospace text-center mt-1" > Driver Registration</div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Driver Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="xyz"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Driver ID
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="123***"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              License Number
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="123***"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="+91 123445775"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="Address"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Driver Address"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupFile01">
                Upload Driver Image
              </label>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                onChange={handleImageUpload1}
              />
            </div>

            {selectedImage1 && (
              <div className="mt-3 mb-3">
                <img
                  src={selectedImage1}
                  alt="Uploaded"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            class="btn btn-primary mb-5"
            onClick={setpagination1}
          >
            Submit
          </button>
        </div>
      )}

      {page3 && (
        <div
          class="card"
          style={{
            marginTop: "10px",
            width: "80%",
            marginLeft: "120px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <button type="button" class="btn btn-outline-warning rounded-pill" onClick={notify}>
            Loading
          </button>
          
          <button
            type="button"
            class="btn btn-outline-warning rounded-pill mt-4"
          >
            Unloading
          </button>
          <button
            type="button"
            class="btn btn-outline-warning rounded-pill mt-4 mb-5"
          >
            Both
          </button>

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Description</label>
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DigitalClock", "MultiSectionDigitalClock"]}
            >
              <DemoItem label="Multi section digital clock">
                <MultiSectionDigitalClock />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>

          <button
            type="submit"
            class="btn btn-primary mb-5 mt-5"
            onClick={finalsubmit}
          >
            Submit
          </button>
        </div>
      )}

      {page4 && (
        <div
          class="card"
          style={{
            marginTop: "10px",
            width: "80%",
            marginLeft: "120px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <button type="button" class="btn btn-dark rounded-pill ">
            Assigned parking lot 3
          </button>
          <button
            type="button"
            class="btn btn-dark rounded-pill mt-4"
          >
            Assigned Dock lot 2
          </button>
          
          <div class="d-flex">
          <div >
            <img src={require("../images/qr-code.png")} alt="" style={{height:"200px",width:"200px"}}/>
          </div>
          <div className="fs-2 fw-semibold mt-5 ms-2 font-monospace">
            This Qr Code send to the Driver Vehicle Dashboard
          </div>
          </div>
   
           <button
            type="submit"
            class="btn btn-success"
          > Print QR </button>


          <button
            type="submit"
            class="btn btn-primary mb-5 mt-2"
            onClick={finalsubmit}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkin;

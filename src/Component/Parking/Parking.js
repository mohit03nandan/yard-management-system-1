import React, { useState } from "react";
import Modal from "../Modal/Modal";
const Parking = () => {
  const [page1, setpage1] = useState(true);
  const [page2, setpage2] = useState(false);
  
  return (
    <div class="container mt-2  rounded-4 p-2 pb-1 mb-1 border-3"> 
    <Modal/>
       <div className="fs-2 fw-semibold  font-monospace">Parking lot {page1?1:2} </div>
      {page1 && (
        <div>
          <div class="row" style={{ height: "20vh" }}>
          <button type="button" class="btn btn-primary" className="col border border-dark ">
              <div >
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </button>
            <button type="button" class="btn btn-primary" className="col border border-dark " data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div >
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </button>

            <div class="col  border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="row" style={{ height: "20vh" }}>
            <div class="col  border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <button type="button" class="btn btn-primary" className="col border border-dark ">
              <div >
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </button>
            <button type="button" class="btn btn-primary" className="col border border-dark ">
              <div >
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </button>
          </div>
          <div class="row" style={{ height: "20vh" }}>
          <button type="button" class="btn btn-primary" className="col border border-dark ">
              <div >
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </button>
            <div class="col  border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <button type="button" class="btn btn-primary" className="col border border-dark ">
              <div >
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </button>
            <button type="button" class="btn btn-primary" className="col border border-dark ">
              <div >
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </button>
          </div>
          <div class="row" style={{ height: "20vh" }}>
            <div class="col border border-dark ">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <button type="button" class="btn btn-primary" className="col border border-dark ">
              <div >
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
      )}

      {page2 && (
        <div>
          <div class="row" style={{ height: "20vh" }}>
            <div class="col border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>

            <div class="col  border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="row" style={{ height: "20vh" }}>
            <div class="col  border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="row" style={{ height: "20vh" }}>
            <div class="col  border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col  border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="row" style={{ height: "20vh" }}>
            <div class="col border border-dark ">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col border border-dark">
              <div className="mt-4 ms-4">
                <img
                  src={require("../images/park.png")}
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </div>
            </div>
            <div class="col border border-dark">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" onClick={() => {
                setpage1(true);
                setpage2(false);
              }}>
              1
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              onClick={() => {
                setpage1(false);
                setpage2(true);
              }}
            >
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Parking;

import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

const Docking = () => {
  const [page1, setpage1] = useState(true)
  const [page2, setpage2] = useState(false)
  const [progress, setProgress] = useState(0);

  // Function to handle time change
  const handleTimeChange = () => {
    setProgress(progress + 25);
  };

  const getProgressBarColor = () => {
    if (progress < 25) return "bg-danger"; 
    if (progress < 50) return "bg-warning"; 
    if (progress < 75) return "bg-info"; 
    return "bg-success"; 
  };

  return (
    <div>
    {page1 && (
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "TimePicker",
          "MobileTimePicker",
          "DesktopTimePicker",
          "StaticTimePicker",
        ]}
      >
        <div
          class="container text-center border border-secondary "
          style={{ marginLeft: "100px", marginBottom: "5px" }}
        >
        <div className="fs-5 fw-semibold font-monospace">Dock 1</div>
          <div class="row border border-secondary " style={{ height: "30vh" }}>
            <div class="col">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
              <div class="fw-semibold font-monospace">UP78HF0533</div>
            </div>
            <div class="col mt-5">
            {progress === 100 ? <div> <iframe src="https://lottie.host/embed/345c7ec4-487c-4231-b845-2903f1f56483/LysHTuEiBv.json" ></iframe>
              <div className="fs-5 fw-semibold font-monospace">Loading Completed</div></div> : <div>
              <div>
               
               <video
                 src={require("../images/loading.mp4")}
                 loop
                 autoPlay
                 muted
                 style={{ height: "150px" }}
               ></video>{" "}
               <div className="fs-5 fw-semibold font-monospace">Loading Vehicle</div>
             </div>
            </div>}
            
            </div>
            <div class="col mt-5">
              <DemoItem label="Docking Time">
                <MobileTimePicker
                  defaultValue={dayjs("2022-04-17T15:30")}
                  onChange={handleTimeChange}
                />
              </DemoItem>
            </div>
            <div class="col mt-5">
              <div className="mb-1">Docking Status</div>

              <div class="progress" style={{ height: "30%" }}>
                <div
                  className={`progress-bar ${getProgressBarColor()}`}
                  role="progressbar"
                  aria-label="Segment one"
                  style={{ width: `${progress}%` }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              {progress === 100 ? <div>Docking Complete</div> : <div></div>}
            </div>
          </div>
          <div class="row border border-secondary" style={{ height: "30vh" }}>
            <div class="col">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
              <div class="fw-semibold font-monospace">UP78HF0535</div>
            </div>
            <div class="col mt-4">
              <iframe src="https://lottie.host/embed/345c7ec4-487c-4231-b845-2903f1f56483/LysHTuEiBv.json" ></iframe>
              <div className="fs-5 fw-semibold font-monospace">Loading Completed</div>
            </div>
            <div class="col">
              <div class="col mt-5">
                <DemoItem label="Docking Time">
                  <MobileTimePicker defaultValue={dayjs("2023-04-17T15:30")} />
                </DemoItem>
              </div>
            </div>
            <div class="col mt-5">
              <div className="mb-1">Docking Status</div>
              <div class="progress" style={{ height: "30%" }}>
                <div
                  className={`progress-bar bg-success`}
                  role="progressbar"
                  aria-label="Segment one"
                  style={{ width: `${100}%` }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="row border border-secondary " style={{ height: "30vh" }}>
            <div class="col mt-5 ">
              <img
                src={require("../images/park.png")}
                style={{ width: "150px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="col">
            <div class=" fs-4 fw-semibold font-monospace mt-5">
              Free Parking
            </div>
            </div>
            <div class="col fs-4 fw-semibold font-monospace mt-5">
              Free Parking
            </div>
            <div class="col fs-4 fw-semibold font-monospace mt-5">
              Free Parking
            </div>
          </div>
        </div>
      </DemoContainer>
    </LocalizationProvider>
    )}

    {page2 && (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "TimePicker",
          "MobileTimePicker",
          "DesktopTimePicker",
          "StaticTimePicker",
        ]}
      >
        <div
          class="container text-center border border-secondary "
          style={{ marginLeft: "100px", marginBottom: "5px" }}
        >
        <div className="fs-5 fw-semibold font-monospace">Dock 2</div>
          <div class="row border border-secondary " style={{ height: "30vh" }}>
            <div class="col">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
              <div class="fw-semibold font-monospace">UP78HF0533</div>
            </div>
            <div class="col mt-5">
            {progress === 100 ? <div> <iframe src="https://lottie.host/embed/345c7ec4-487c-4231-b845-2903f1f56483/LysHTuEiBv.json" ></iframe>
              <div className="fs-5 fw-semibold font-monospace">Loading Completed</div></div> : <div>
              <div>
               
               <video
                 src={require("../images/loading.mp4")}
                 loop
                 autoPlay
                 muted
                 style={{ height: "150px" }}
               ></video>{" "}
               <div className="fs-5 fw-semibold font-monospace">Loading Vehicle</div>
             </div>
            </div>}
            
            </div>
            <div class="col mt-5">
              <DemoItem label="Docking Time">
                <MobileTimePicker
                  defaultValue={dayjs("2022-04-17T15:30")}
                  onChange={handleTimeChange}
                />
              </DemoItem>
            </div>
            <div class="col mt-5">
              <div className="mb-1">Docking Status</div>

              <div class="progress" style={{ height: "30%" }}>
                <div
                  className={`progress-bar `}
                  role="progressbar"
                  aria-label="Segment one"
                  style={{ width: "30%" }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              {progress === 100 ? <div>Docking Complete</div> : <div></div>}
            </div>
          </div>
          <div class="row border border-secondary" style={{ height: "30vh" }}>
            <div class="col">
              <div>
                <img
                  src={require("../images/silhouette.png")}
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </div>
              <div class="fw-semibold font-monospace">UP78HF0535</div>
            </div>
            <div class="col mt-4">
            <video
                 src={require("../images/loading.mp4")}
                 loop
                 autoPlay
                 muted
                 style={{ height: "150px" }}
               ></video>
               <div className="fs-5 fw-semibold font-monospace">Unloading Vehicle</div>
            </div>
            <div class="col">
              <div class="col mt-5">
                <DemoItem label="Docking Time">
                  <MobileTimePicker defaultValue={dayjs("2023-04-17T15:30")} />
                </DemoItem>
              </div>
            </div>
            <div class="col mt-5">
              <div className="mb-1">Docking Status</div>
              <div class="progress" style={{ height: "30%" }}>
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  aria-label="Segment one"
                  style={{ width: `${48}%` }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="row border border-secondary " style={{ height: "30vh" }}>
            <div class="col mt-5 ">
              <img
                src={require("../images/park.png")}
                style={{ width: "150px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="col">
            <div class=" fs-4 fw-semibold font-monospace mt-5">
              Free Parking
            </div>
            </div>
            <div class="col fs-4 fw-semibold font-monospace mt-5">
              Free Parking
            </div>
            <div class="col fs-4 fw-semibold font-monospace mt-5">
              Free Parking
            </div>
          </div>
        </div>
      </DemoContainer>
    </LocalizationProvider>
    )}

    <nav aria-label="Page navigation example">
  <ul class="pagination" style={{marginLeft:"100px"}}>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{
        setpage1(true);
        setpage2(false);
  
    }}>1</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{
      setpage1(false);
        setpage2(true);
    }}>2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
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

export default Docking;

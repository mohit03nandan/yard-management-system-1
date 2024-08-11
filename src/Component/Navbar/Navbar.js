import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { PiGarageFill } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaParking } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-around align-items-center pb-2 bg-primary text-white">
      <div style={{ fontSize: "40px" }} onClick={() => navigate('/yard/Dashboard')}>
        <IoHomeSharp />
      </div>
      <div style={{ fontSize: "40px" }}  onClick={() => navigate('/yard/Parking')}>
        <FaParking />
      </div>
      <div style={{ fontSize: "40px" }}  onClick={() => navigate('/yard/Docking')}>
        <CgNotes />
      </div>
      <div
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        style={{ fontSize: "40px" }}
      >
        <CgProfile />
      </div>

      <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{backgroundColor:"	#00b0ff"}}
      >
        <div class="offcanvas-header " style={{marginLeft:"100px"}}>
          <div
            className="d-flex justify-content-center align-items-center rounded-circle bg-light "
            style={{ backgroundColor: "gray", height: "150px", width: "150px" }}
          >
            <CiUser style={{ fontSize: "50px",color:"red" }} />
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body d-flex flex-column ">
            <div className="d-flex " >
                <div style={{color:"white" ,fontSize:"30px"}}><CgProfile /></div>
                <div className="ms-5 mt-2" style={{color:"white" ,fontSize:"20px"}}>Mohit Nandan</div>
            </div>
            <div className="d-flex mt-3">
                <div style={{color:"white" ,fontSize:"30px"}}><MdOutlineEmail /></div>
                <div className="ms-5 mt-2" style={{color:"white" ,fontSize:"20px"}}>mohitnandan81825@gmail.com</div>
            </div>
            <div className="d-flex mt-3">
                <div style={{color:"white" ,fontSize:"30px"}}><PiGarageFill/></div>
                <div className="ms-5 mt-2" style={{color:"white" ,fontSize:"20px"}}>Delhi Walmart</div>
            </div>
            <div className="d-flex mt-3">
                <div style={{color:"white" ,fontSize:"30px"}}><CiEdit/></div>
                <div className="ms-5 mt-2" style={{color:"white" ,fontSize:"20px"}}>Edit Profile</div>
            </div>
            <div className="d-flex mt-3">
                <div style={{color:"white" ,fontSize:"30px"}}><IoIosLogOut/></div>
                <div className="ms-5 mt-2" style={{color:"white" ,fontSize:"20px"}}>Logout</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

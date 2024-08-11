import React from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
 
  const navigate  = useNavigate();

  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100 '>
      <div className='text-center'>
      <button type="button" class="btn btn-secondry" onClick={() => navigate('/yard/Checkin')}>
        <div className='fs-2 fw-semibold font-monospace'>CheckIn</div>
        <img src={require('../images/trucks.gif')} alt='CheckIn' style={{height:"300px", width:"350px"}}/>
        </button>
      </div>
      <div className='text-center mt-2'>

      <button type="button" class="btn btn-secondry" onClick={() => navigate('/yard/Checkout')}>
        <div className='fs-2 fw-semibold font-monospace'>CheckOut</div>
        <img src={require('../images/trucks.gif')} alt='CheckOut' style={{height:"300px", width:"350px", transform: "scaleX(-1)"}}/>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

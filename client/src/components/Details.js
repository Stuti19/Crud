import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Details = () => {
  return (
    <div className='container mt-3'>
      <h2>Welcome, Iva </h2>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className='row'>
            <div className='left_view col-mg-6 col-md-6 col-12'>
              <img src="/profile.png" style={{ width: 70 }} alt="profile" />
              <h3 className='mt-3'> Name : <span>Iva Piva</span></h3>
              <h3 className='mt-3'> Age : <span>21</span></h3>
              <p className='mt-3'><MailOutlineIcon /> Email: <span>iva@gmail.com</span></p>
              <p className='mt-3'><WorkIcon /> Occupation: <span>Student</span></p>
            </div>
            <div className='right_view col-mg-6 col-md-6 col-12 mt-3'>
              <div className='add_btn'>
                <button className='btn btn-primary mx-2'><CreateIcon /></button>
                <button className='btn btn-danger'><DeleteForeverIcon /></button>
              </div>
              <p className='mt-4'><LocalPhoneIcon /> Contact: <span>+91 9863528282</span></p>
              <p className='mt-3'><LocationOnIcon /> Location: <span>Indore</span></p>
              <p>Description:<span>asefdrgfthgyj fdgfhgjhd dfxcg gcg </span></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Details
import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Home = () => {
    return (
        <div className="m-5">
            <div className="conatiner">
                <div className="add_btn mt-2">
                    <button className='btn btn-primary'>Add Data</button>
                </div>
                <table className="table mt-2" >
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">ID</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>mark@gmail</td>
                            <td>student</td>
                            <td>9865345678</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><RemoveRedEyeIcon/></button>
                                <button className='btn btn-primary'><CreateIcon/></button>
                                <button className='btn btn-danger'><DeleteForeverIcon/></button>
                            </td>
                        </tr>                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
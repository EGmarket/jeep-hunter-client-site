import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from "@mui/material/Paper";
import { toast } from 'react-toastify';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch("https://shrouded-waters-34651.herokuapp.com/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);

      // Deleting Orders
  const handleDeleteOrder = id => {
    const proceed = window.confirm("Are You Sure ?")
    if(proceed){
      fetch(`https://shrouded-waters-34651.herokuapp.com/deleteService/${id}`, {
        method: "DELETE",
        headers: {"content-type" : "application/json"}
      })
      .then(res => res.json())
      .then(result => {
        if(result.deletedCount){
          setIsDeleted(true)
          toast.success(" Deleted Successfully");
        } else {
          setIsDeleted(false)
        }
      });
      console.log(id);
    }
    }

    return (
        <div>
      <h2>Appointments </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>JEEP NAME</TableCell>
             
              <TableCell align="right">price</TableCell>
              <TableCell align="right">category</TableCell>
              <TableCell align="right">country</TableCell>
              <TableCell align="right">installment</TableCell>
              <TableCell align="right">delivery</TableCell>
              <TableCell align="right">REMOVE SERVICE</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right"> {row.category} </TableCell>
                <TableCell align="right">{row.country}</TableCell>
                <TableCell align="right">{row.installment}</TableCell>
                <TableCell align="right">{row.home_delivery}</TableCell>
                <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)} variant="contained">DELETE</Button></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    );
};

export default ManageServices;
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
  
  const { user } = useAuth();
  const email = user.email;
  useEffect(() => {
    fetch(`https://shrouded-waters-34651.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);

  // Deleting Orders
  const handleDeleteOrder = id => {
    const proceed = window.confirm("Are You Sure ?")
    if(proceed){
      fetch(`https://shrouded-waters-34651.herokuapp.com/deleteOrder/${id}`, {
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
            Total Number of Orders: {orders.length}
            {
              orders.map(order => <div>
                <h2>Order Name: {order.productName}</h2>
                <h6>Price: {order.price}</h6>
                <Button onClick={() => handleDeleteOrder(order._id)}>Cancel</Button>
              </div>)
            }


        </div>
    );
};

export default MyOrders;
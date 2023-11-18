import { Card } from './Card';
import '../App.css'
import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";
import SyncLoader from "react-spinners/SyncLoader";
import BeatLoader from "react-spinners/BeatLoader";


export default function CardListing() { 
  // Static variables
  const loaderColor = "red";
  const loaderSize = 20;
  const usersAPI = 'https://api.slingacademy.com/v1/sample-data/photos';

  // States
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch(usersAPI);
      if (response.ok) {
        const data = await response.json();
        setUsers(data.photos);
        setLoading(false);
        toast.success('Photoes data is loaded successfully.');
      } else {
        console.error('');
        toast.error('Failed to fetch data');
        setLoading(false);
      }
    } catch (error) {
      toast.error('Error while fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  return (
    <>
    {
      loading ? 
        <div className="user-loader">
          <BeatLoader color={loaderColor} loading={loading} size={loaderSize} />
        </div> 
          : 
        <div className="user-list">
          <h1 className="text-center">All Photoes</h1>
          <div className="grid-cols-1 sm:grid md:grid-cols-5">
            {users.map((user, index) => {
              return <Card key={index} user={user} />;
            })}
          </div>
        </div>
    }
    </>
  );
}

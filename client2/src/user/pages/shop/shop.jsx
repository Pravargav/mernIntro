import React,{useEffect,useState} from "react";
import Axios from 'axios';
import { Product } from "./product";
import "./shop.css";



export const Shop = () => {
 
  const [flist,setflist]=useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:8080/read").then((response)=>{
     
     setflist(response.data);
    })
   },[])


  return (
    
    <div className="shop">
      <div className="shopTitle">
        <h1>Bidding App</h1>
      </div>

      <div className="products">
        {flist.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

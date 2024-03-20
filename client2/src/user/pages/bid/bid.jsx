

import { BidItem} from "./bid-item";
import "./bid.css";
import {ShopContext} from '../../context/shop-context'
import React,{useEffect,useState,useContext} from "react";
import Axios from 'axios';


export const Bid = () => {
 
  const [flist,setflist]=useState([]);
  const [flistx,setflistx]=useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:8080/read").then((response)=>{
   
     setflist(response.data);
    })
   },[])


  const { bidItem } = useContext(ShopContext);

  useEffect(()=>{
    if(bidItem==1){
      Axios.get("http://localhost:8080/readx1").then((response)=>{
        setflistx(response.data);
       })
    }
    else if(bidItem==2){
      Axios.get("http://localhost:8080/readx2").then((response)=>{
        setflistx(response.data);
       })
    }
    else if(bidItem==3){
      Axios.get("http://localhost:8080/readx3").then((response)=>{
        setflistx(response.data);
       })
    }
    else if(bidItem==4){
      Axios.get("http://localhost:8080/readx4").then((response)=>{
        setflistx(response.data);
       })
    }
    else if(bidItem==5){
      Axios.get("http://localhost:8080/readx5").then((response)=>{
        setflistx(response.data);
       })
    }
   },[])
  
  

  return (
    <div className="cart">

      <div>
        <h1>Your Bid item</h1>
      </div>


      <div className="cart">
      {
      flist.map((product) => {
          if (product.pId==bidItem) {
            return <BidItem data={product} />;
          }
      })
      }
      </div>

      <ol className="comment-list">
      {
        flistx.map((biditem,index) => (
          
          <li key={index} className="comment-box">
            <div className="comment-number">{index + 1}.</div>
            <div className="comment-content">
            {biditem.bId}-------------------------------------------------------------------------------------{'>'}{biditem.bAmount} $$
            </div>
          </li>
        ))
      }
      </ol>
      
</div>
  );
};

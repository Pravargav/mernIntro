import React,{useState} from "react";
import Axios from "axios";


export const BidItem = (props) => {
  const { pId, pName, pPrice, pImage } = props.data;
  const [amnt,setAmnt]=useState(0);

  const sendAmnt =()=>{
    Axios.post("http://localhost:8080/insertx",{
      amnt:amnt,
      pId:pId,
      bId:"client2",
    })
  }
  

  return (
    <div className="cartItem">

      <img src={pImage} />

      <div className="description">

      <p>
          <b>{pName}</b>
        </p>
 
        <p> Price==:{pPrice}$$</p>
        <p> Id==:{pId}</p>




    <div className="cinput-container">
      <input className="cinput" type="number" onChange={(event)=>{
        setAmnt(event.target.value);
      }}/>
      <button className="cbutton" onClick={sendAmnt}> bid $$</button>
    </div>

      </div>
    </div>
  );
};

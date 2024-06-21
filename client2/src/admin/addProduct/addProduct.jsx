import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";


function AddProduct() {
 
  const [pId, setPId] = useState(0);
  const [pImage, setPImage] = useState("");
  const [pName, setPName] = useState("");
  const [predefDate, setPredefDate] = useState(null);
  const [predefTime, setPredefTime] = useState("");


  const addToList = () => {
    Axios.post("http://localhost:8080/addproduct", {
      pId:pId,
      pImage:pImage,
      pName:pName,
      predefDate:predefDate,
      predefTime:predefTime,
      started:false,
      active: true,
      users: [],
      live: [],
    });
  };

  return (
    <>
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        add a product to Auction.
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "40vh 40vh",
          border: "2px solid gray",
          margin: "120px 540px 120px 540px",
        }}
      >
        <Form onSubmit={addToList}>
          <Form.Group className="mb-3" controlId="emailx">
            <Form.Label style={{ fontFamily: "sans-serif" }}>PId</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setPId(e.target.value);
              }}
              style={{
                height: "50px",
                borderColor: "black",
                borderWidth: "1px",
              }}
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailx">
            <Form.Label style={{ fontFamily: "sans-serif" }}>PImage</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setPImage(e.target.value);
              }}
              style={{
                height: "50px",
                borderColor: "black",
                borderWidth: "1px",
              }}
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailx">
            <Form.Label style={{ fontFamily: "sans-serif" }}>pName</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setPName(e.target.value);
              }}
              style={{
                height: "50px",
                borderColor: "black",
              
                borderWidth: "1px",
              }}
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailx">
            <Form.Label style={{ fontFamily: "sans-serif" }}>predefDate</Form.Label>
            <Form.Control
              type="date"
              value={predefDate}
              onChange={(e) => {
                setPredefDate(e.target.value);
              }}
              style={{
                height: "50px",
                borderColor: "black",
                borderWidth: "1px",
              }}
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailx">
            <Form.Label style={{ fontFamily: "sans-serif" }}>predefTime</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setPredefTime(e.target.value);
              }}
              style={{
                height: "50px",
                borderColor: "black",
                borderWidth: "1px",
              }}
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailx">
            <Form.Label style={{ fontFamily: "sans-serif" }}>PId</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setPId(e.target.value);
              }}
              style={{
                height: "50px",
                borderColor: "black",
                borderWidth: "1px",
              }}
              autoComplete="true"
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button
              variant="dark"
              type="submit"
              size="lg"
              style={{ fontFamily: "sans-serif" }}
            >
              Add+
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddProduct;

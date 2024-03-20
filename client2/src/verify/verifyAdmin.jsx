import React, { useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export const VerifyAdmin = (props) => {
  const [adimn, setAdmin] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.post("http://localhost:8080/verifyAdmin", {
        adimn,
      });
      if (res.data.message === "success") {
        window.localStorage.setItem("patientId", res.data.id);
        window.localStorage.setItem("userType", "patient");
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {" "}
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        Patient Login!!
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          width: "50vh 50vh",
          border: "2px solid gray", // Add a black border
          margin: "120px 540px 120px 540px", // Add margin around the component
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="emailx">
            <Form.Label size="lg" style={{ fontFamily: "sans-serif" }}>
              Email
            </Form.Label>
            <Form.Control
              onChange={(e) => {
                setAdmin(e.target.value);
              }}
              type="text"
              size="lg"
              style={{
                height: "50px",
                borderRadius: "0",
                borderColor: "black",
                borderWidth: "2px",
              }}
              autoComplete="true"
            />
          </Form.Group>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px", // Adjust the margin as needed
            }}
          >
            <Button
              variant="dark"
              type="submit"
              size="lg"
              style={{ fontFamily: "sans-serif" }}
            >
              If admin fill and click
            </Button>

            <Button
              variant="dark"
              type="submit"
              size="lg"
              style={{ fontFamily: "sans-serif" }}
            >
              If not admin just click
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

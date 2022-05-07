import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      className="w-100 d-flex justify-content-center align-item-center"
      style={{ width: "400px" }}
    >
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loading;

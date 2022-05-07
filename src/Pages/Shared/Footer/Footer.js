import React from "react";
import "./Footer.css";

const Footer = () => {
  const day = new Date();
  let year = day.getFullYear();
  return (
    <div className="bg-dark text-light">
      <div className="mx-5  p-5">
        <h2>Do you Have any questions?</h2>
        <p>Please contact our team</p>
        <div className="d-flex ">
          <div className="mx-5">
            <h4>Email</h4>
            <span>konkon@gmail.com</span>
            <h4>Address:</h4>
            <span>Green street,56/5 lange,Delhi,Bnagladesh</span>
          </div>
          <div>
            <h4>Phone</h4>
            <span>0187777777</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <small>Copyright©{year} ALL RIGHT RESEARVED</small>
      </div>
    </div>
  );
};

export default Footer;

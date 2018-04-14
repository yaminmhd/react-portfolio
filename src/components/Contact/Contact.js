import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-body">
      <div className="container">
        <h2>Contact</h2>
        <div className="col">
        <p>You can contact me through the following: </p>
          <hr />
          <div className="contact-list">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fas fa-mobile-alt icon" />
                +(65) 98899067
              </li>
              <li className="list-group-item">
                <i className="far fa-envelope-open icon" />
                mdyamin.drzee@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./Header.css";
export default function Header({ name, message }) {
  return (
    <header id="page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <h1>{name}</h1>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

import React, { useReducer } from "react";
import { reducer } from "./fake-store-practise";
import { initialState } from "./fake-store-practise";

function NavBar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Fakestore
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Home
          </a>
          <a className="nav-item nav-link" href="#">
            Electronics
          </a>
          <a className="nav-item nav-link" href="#">
            Jewellery
          </a>
          <button type="button" className="btn btn-primary">
            Cart Items
            <span className="badge badge-light">{state.cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

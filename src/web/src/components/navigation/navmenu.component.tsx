import React, { Component } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import logo_nav from "./../../assets/logo_nav.png";

export class NavMenu extends Component {
  render() {
    return (
      <header>
        <nav
          aria-label="main navigation"
          className="navbar"
          role="navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item has-text-weight-bold" href="/">
              <img src={logo_nav} alt="logo-nav" />
            </a>
          </div>
          <div className="navbar-menu" id="navbar">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    className="button is-dark has-text-weight-bold"
                    href="/login"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

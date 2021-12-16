import { useState } from "react";
// components
import ZidLogo from "assets/images/zid-logo.png";
// style
import "./navbar.component.scss";

const Navbar = () => {
  const [show, setshow] = useState(false);
  console.log(show);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={ZidLogo} alt="zid-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setshow(!show)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${show && "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                التصنيفات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                التطبيقات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                طور التطبيق
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { FaUserAlt,FaSearch,FaShoppingCart,FaRegHeart } from "react-icons/fa";
import React from 'react';

const Navbar = (props) => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3 className="logo">AccioJob</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item home ">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item shop">
          <a className="nav-link active" href="/">Shop</a>
        </li>
        <li className="nav-item items">
          <a className="nav-link active">About</a>
        </li>
        <li className="nav-item items">
          <a className="nav-link active">Blog</a>
        </li>
        <li className="nav-item items ">
          <a className="nav-link active">Contact</a>
        </li>
        <li className="nav-item items ">
          <a className="nav-link active">Pages</a>
        </li>
        <li className="nav-item prof ">
        <button type="button" class="btn btn-outline-info">
          <FaUserAlt/>
          Login/Register
        </button>
        </li>
        <li className="nav-item items profile">
            <FaSearch/>
        </li>
        <li className="nav-item items profile  ">
            <FaShoppingCart/>{props.cart}
        </li>
        <li className="nav-item items profile">
            <FaRegHeart/>1
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
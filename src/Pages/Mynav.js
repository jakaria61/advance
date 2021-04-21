import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import Mynav1 from './Mynav1.css';
class Mynav extends Component {
    
    
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-success text-white nav-status">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BigZoneUp</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to='/' class="nav-link fs-5 fw-bold text-white nav-status"  aria-current="page">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/Bag'  class="nav-link fs-5 fw-bold text-white nav-status">Bag</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/Watch'  class="nav-link fs-5 fw-bold text-white nav-status">Watch</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/Shoes' class="nav-link fs-5 fw-bold text-white nav-status">Shoes</Link>
                    </li>
                    
                    <li class="nav-item">
                    <Link to='/Earing' class="nav-link fs-5 fw-bold text-white nav-status">Earing</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/Phone' class="nav-link fs-5 fw-bold text-white nav-status">Phone</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/Ring' class="nav-link fs-5 fw-bold text-white nav-status">Ring</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/Order' class="nav-link fs-5 fw-bold text-white nav-status">Order</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Mynav;
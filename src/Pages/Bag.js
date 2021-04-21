import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import bag1 from '../images/Bag/bag1.jpg';
import bag2 from '../images/Bag/bag2.jpg'
import bag3 from '../images/Bag/bag3.jpg';
import bag4 from '../images/Bag/bag4.jpg';
import bag5 from '../images/Bag/bag5.jpg';
import bag6 from '../images/Bag/bag6.jpg';

class Bag extends Component {
    render() {
        return (
            <div className="all">
                      
            <div className="all">
                <div className="card" id="card-1">
                <img src={bag1} alt="remote image"></img>
                <br></br>
                <div className="d-flex justify-content-between">
                        <h3>$200</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   
                </div>
                <div className="card" id="card-2">
                <img src={bag2} alt="remote image"></img>
                <br></br>
                <div className="d-flex justify-content-between">
                        <h3>$150</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={bag3} alt="remote image"></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$230</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={bag4} alt="remote image"></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$150</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={bag5} alt="remote image"></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$230</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={bag6} alt="remote image"></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$200</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                     
                </div>
                <Link to='/'><button type="button" class="btn btn-success" >GoTo Home</button></Link>
            </div>
           
        );
    }
}

export default Bag;
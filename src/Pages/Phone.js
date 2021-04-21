import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import oppo from '../images/phone/oppo.jpg';
import iphone from '../images/phone/iphone.jpg';
import mi from '../images/phone/mi.png';
import vivo from '../images/phone/vivo.jpg';
import oneplus from '../images/phone/oneplus.jpg';
import samsung from '../images/phone/samsung.jpg';

class Phone extends Component {
    render() {
        return (
            <div className="all">
                      
            <div className="all">
                <div className="card" id="card-1">
                <img src={iphone} alt=" "></img>
                <br></br>
                <div className="d-flex justify-content-between">
                        <h3>$200</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   
                </div>
                <div className="card" id="card-2">
                <img src={mi} alt=" "></img>
                <br></br>
                <div className="d-flex justify-content-between">
                        <h3>$150</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={vivo} alt=" "></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$230</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={oneplus} alt=" "></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$150</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={samsung} alt=" "></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$230</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={oppo} alt=" "></img>
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

export default Phone;
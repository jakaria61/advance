import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ear1 from '../images/ear/ear1.jpg'
import ear2 from '../images/ear/ear2.jpg'
import ear3 from '../images/ear/ear3.jpg'
import ear4 from '../images/ear/ear4.jpg'
import ear5 from '../images/ear/ear5.jpg'
import ear6 from '../images/ear/ear6.jpg'

class Earing extends Component {
    render() {
        return (
            <div className="all">
                      
            <div className="all">
                <div className="card" id="card-1">
                <img src={ear1} alt=""></img>
                <br></br>
                <div className="d-flex justify-content-between">
                        <h3>$200</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   
                </div>
                <div className="card" id="card-2">
                <img src={ear2} alt=""></img>
                <br></br>
                <div className="d-flex justify-content-between">
                        <h3>$150</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={ear3} alt=""></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$230</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={ear4} alt=" "></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$150</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={ear5} alt=" "></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$230</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={ear6} alt=" "></img>
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

export default Earing;
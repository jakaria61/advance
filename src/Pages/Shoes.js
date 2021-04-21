import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoes from '../images/Shoes/shoes.jpg';
import shoes1 from '../images/Shoes/shoes1.jpg';
import shoes2 from '../images/Shoes/shoes2.jpg';
import shoes4 from '../images/Shoes/shoes4.jpg';
import shoes5 from '../images/Shoes/shoes5.jpg';
import shoes6 from '../images/Shoes/shoes6.jpg';


class Shoes extends Component {
    render() {
        return (
            <div className="all">
                      
        <div className="all">
            <div className="card" id="card-1">
            <img src={shoes} alt=""></img>
            <br></br>
            <div className="d-flex justify-content-between">
                    <h3>$300</h3>
               <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
               </div>
               
            </div>
            <div className="card" id="card-2">
            <img src={shoes1} alt=""></img>
            <br></br>
            <div className="d-flex justify-content-between">
                    <h3>$100</h3>
               <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
               </div>
               </div>
               <div className="card" id="card-2">
            <img src={shoes2} alt=""></img>
            <br></br>
                <div className="d-flex justify-content-between">
                    <h3>$170</h3>
               <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
               </div>
               </div>
               <div className="card" id="card-2">
            <img src={shoes4} alt=""></img>
            <br></br>
                <div className="d-flex justify-content-between">
                    <h3>$150</h3>
               <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
               </div>
               </div>
               <div className="card" id="card-2">
            <img src={shoes5} alt=" "></img>
            <br></br>
                <div className="d-flex justify-content-between">
                    <h3>$200</h3>
               <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
               </div>
               </div>
               <div className="card" id="card-2">
            <img src={shoes6} alt=""></img>
            <br></br>
                <div className="d-flex justify-content-between">
                    <h3>$400</h3>
               <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
               </div>
               </div>
                 
            </div>
            <Link to='/'><button type="button" class="btn btn-success" >GoTo Home</button></Link>
        </div>
       
        );
    }
}

export default Shoes;
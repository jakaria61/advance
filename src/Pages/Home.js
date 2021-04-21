import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoes from '../images/Shoes/shoes.jpg';
import watch5 from '../images/watch/watch5.jpg'
import bag5 from '../images/Bag/bag5.jpg'
import Earing from './Earing';
import ear from '../images/ear/ear.jpg'
import phone from '../images/phone/phone.jpg';
import ring1 from '../images/ring/ring1.jpg';

class Home extends Component {
    render() {
        return (
       <div className="all">
                      
        <div className="all">
            <div className="card" id="card-1">
            <img src={shoes}></img>
            <br></br>
            <div className="d-flex justify-content-between">
                    <h3>$200</h3>
               <Link to='/Shoes'><button type="button" class="btn btn-success" >Check Now</button></Link>
               </div>
               
            </div>
            <div className="card" id="card-2">
            <img src={watch5}></img>
            <br></br>
            <div className="d-flex justify-content-between">
                    <h3>$400</h3>
               <Link to='/Watch'><button type="button" class="btn btn-success" >Check Now</button></Link>
               </div>
               </div>
               <div className="card" id="card-2">
            <img src={bag5}></img>
            <br></br>
                <div className="d-flex justify-content-between">
                    <h3>$300</h3>
               <Link to='/Bag'><button type="button" class="btn btn-success" >Check Now</button></Link>
               </div>
               </div>

               <div className="card" id="card-2">
            <img src={ear}></img>
            <br></br>
                <div className="d-flex justify-content-between">
                    <h3>$250</h3>
               <Link to='/Earing'><button type="button" class="btn btn-success" >Check Now</button></Link>
               </div>
               </div>
               <div className="card" id="card-2">
            <img src={phone}></img>
            <br></br>
                <div className="d-flex justify-content-between">
                    <h3>$2000</h3>
               <Link to='/Phone'><button type="button" class="btn btn-success" >Check Now</button></Link>
               </div>
               </div>

               <div className="card" id="card-2">
            <img src={ring1}></img>
            <br></br>
                <div className="d-flex justify-content-between">
                    <h3>$170</h3>
               <Link to='/Ring'><button type="button" class="btn btn-success" >Check Now</button></Link>
               </div>
               </div>
                 
            </div>
            
        </div>
       
            
        );
    }
}

export default Home;
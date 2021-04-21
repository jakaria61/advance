import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Watch1 from '../images/watch/watch1.jpeg'
import Watch2 from '../images/watch/watch2.jpg'
import watch3 from '../images/watch/watch3.jpg';
import Watch4 from '../images/watch/watch4.jpg';
import Watch5 from '../images/watch/watch5.jpg';
import Watch6 from '../images/watch/watch6.jpg';

class Watch extends Component {
    render() {
        return (
            <div className="all">
                      
            <div className="all">
                <div className="card" id="card-1">
                <img src={Watch1} alt="remote image"></img>
                <br></br>
                <div className="d-flex justify-content-between">
                        <h3>$250</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   
                </div>
                <div className="card" id="card-2">
                <img src={Watch2} alt="remote image"></img>
                <br></br>
                <div className="d-flex justify-content-between">
                        <h3>$170</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={watch3} alt="remote image"></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$270</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={Watch4} alt="remote image"></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$150</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={Watch5} alt="remote image"></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$400</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                   <div className="card" id="card-2">
                <img src={Watch6} alt="remote image"></img>
                <br></br>
                    <div className="d-flex justify-content-between">
                        <h3>$300</h3>
                   <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                   </div>
                   </div>
                     
                </div>
                <Link to='/'><button type="button" class="btn btn-success" >GoTo Home</button></Link>
            </div>
           
        );
    }
}

export default Watch;
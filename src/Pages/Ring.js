import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ring1 from '../images/ring/ring1.jpg';
import ring2 from '../images/ring/ring2.jpg';
import ring3 from '../images/ring/ring3.jpg';
import ring4 from '../images/ring/ring4.jpg';
import ring5 from '../images/ring/ring5.jpg';
import ring6 from '../images/ring/ring6.jpg';


class Ring extends Component {
    render() {
        return (
            <div>
               <div className="all">
                      
                      <div className="all">
                          <div className="card" id="card-1">
                          <img src={ring1} alt=" "></img>
                          <br></br>
                          <div className="d-flex justify-content-between">
                                  <h3>$200</h3>
                             <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                             </div>
                             
                          </div>
                          <div className="card" id="card-2">
                          <img src={ring2} alt=" "></img>
                          <br></br>
                          <div className="d-flex justify-content-between">
                                  <h3>$150</h3>
                             <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                             </div>
                             </div>
                             <div className="card" id="card-2">
                          <img src={ring3} alt=" "></img>
                          <br></br>
                              <div className="d-flex justify-content-between">
                                  <h3>$230</h3>
                             <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                             </div>
                             </div>
                             <div className="card" id="card-2">
                          <img src={ring4} alt=" "></img>
                          <br></br>
                              <div className="d-flex justify-content-between">
                                  <h3>$150</h3>
                             <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                             </div>
                             </div>
                             <div className="card" id="card-2">
                          <img src={ring5} alt=" "></img>
                          <br></br>
                              <div className="d-flex justify-content-between">
                                  <h3>$230</h3>
                             <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                             </div>
                             </div>
                             <div className="card" id="card-2">
                          <img src={ring6} alt=" "></img>
                          <br></br>
                              <div className="d-flex justify-content-between">
                                  <h3>$200</h3>
                             <Link to='/Order'><button type="button" class="btn btn-success" >Buy Now</button></Link>
                             </div>
                             </div>
                               
                          </div>
                          <Link to='/'><button type="button" class="btn btn-success" >GoTo Home</button></Link>
                      </div>
                     
            </div>
        );
    }
}

export default Ring;
import React, { Component } from 'react';
import reactDom from 'react-dom';
import { Link } from 'react-router-dom';

class Order extends Component {
    onClickHandler(){
        alert("Oder Success")
    }

        constructor(){
            super()

            this.state={
                Cname:"",
                Phone:"",
                Email:""
            }
        }
        onChangeHandler=(event)=>{
            var inputName=event.target.name;
            var inputValue=event.target.value;


            this.setState({[inputName]:inputValue})
        }

    render() {
        return (
            <div className="contin">

              <div >
              <form>
                   <h1 >Name:{this.state.Cname}</h1>
                   <h1 >Phone:{this.state.Phone}</h1>
                   <h1 >Email:{this.state.Email}</h1>
               <h1>Customer Details</h1>
                  
                   <input onChange={this.onChangeHandler} name="Cname" type="text" placeholder="Enter Your name:"></input><br></br>
                    <input onChange={this.onChangeHandler} name="Phone" type="text" placeholder="Enter Your phone:"></input><br></br>
                    <input onChange={this.onChangeHandler} name="Email" type="text" placeholder="Enter Your Email:"></input><br></br>
                    <input onClick={this.onClickHandler} name="Submit" type="Submit" value="Buy Now"></input>
                  
               </form>
              </div>
              <Link to='/'><button type="button" class="btn btn-success" >GoTo Home</button></Link>
            </div>
        );
    }
}

export default Order;
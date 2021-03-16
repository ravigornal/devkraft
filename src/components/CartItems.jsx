import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { removeFromCart } from './../redux/actions/productActions';
import { useHistory } from 'react-router-dom'


function CartItems(props)
{
    const history = useHistory()
    var total = 0;
    var tax = 0;

    const removeItem = (id) =>
    {
        props.removeFromCart(id);
    }

    const checkOut = () =>{
        alert("Order Placed Successfully...")
        history.push("")
    }
   
    return (
        <>
            <Navbar crumb={false} length={props.cartItems.length}/>
            <div className="d-flex">
                <div className="col-9">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: "100px" }}>Sr.No</th>
                                <th className="ml-3">Vendor Name</th>
                                <th className="ml-3">Product Name</th>
                                <th className="ml-3"> Price</th>
                            </tr>
                        </thead>
                        {props.cartItems.map((e, id) => {
                            total = total + Number(e.price)
                            tax = (10/100)*total
                            return (
                                <tbody>
                                    <tr>
                                        <td>{id+1}</td>
                                        <td>{e.vendor}</td>
                                        <td>{e.name}</td>
                                        <td>$ {e.price}</td>
                                        <td>
                                            <button 
                                                onClick={() => removeItem(id)}
                                            >Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
                <div className="col-3">
                    <div class="card text-center">
                        <div class="card-header">
                            <h4><strong>Total</strong></h4>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Amount :$ {total} </h5>
                            <h6 class="card-text">Tax :$ {tax}</h6>
                            <h4 class="card-text">Total :$ {total + tax}</h4>
                            <button 
                                class="btn btn-success" 
                                onClick={() =>{checkOut()}}
                            >Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (store) =>
{
    return {
        cartItems: store.productReducer.cartItems
    }
}


export default connect(mapStateToProps, { removeFromCart })(CartItems)

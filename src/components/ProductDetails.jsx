import React, {useEffect} from 'react'
import { useSelector, useDispatch,connect } from 'react-redux'
import {productDetails} from '../redux/actions/productActions'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import {addToCart} from '../redux/actions/productActions'

function ProductDetails(props) {

    const dispatch = useDispatch()
 
    const productId = props.match.params.id
    const productDetail = useSelector(state=> state.productReducer.productDetails)

    useEffect(() => {
        dispatch(productDetails(productId))
    }, [])
    const handleClick = (item) =>
    {
        dispatch(addToCart(item));
    }

    return (
        <>
            <Navbar 
                crumb={false} 
                length={props.cartItems.length}
            />
            
            <div class="card ">
                <div class="row no-gutters">
                    <div class="col-auto">
                        <img src={productDetail.image_src} class="img-fluid" alt="" style={{height:"500px"}}/>
                    </div>
                    <div class="col">
                        <div class="card-block px-2 m-3">
                            <h2 class="card-title"><strong>{productDetail.vendor}</strong></h2>
                            <h5 class="card-text">{productDetail.name}</h5>
                            <p class="card-text textCenter">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <h3><span><strong>Price : ${productDetail.price} </strong><s class="text-muted">${productDetail.compare_at_price}</s> <b class="text-danger">(50% OFF)</b></span></h3>
                            <div class="row ml-1 mt-5">
                                <button type="button" class="btn btn-outline-primary ml-1 mr-1"  onClick={() => {handleClick(productDetail.id) }}>Add To Cart</button>
                                <Link to="/"><button type="button" class="btn btn-outline-warning ml-1 mr-1" >Back</button></Link>
                            </div>
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

export default connect(mapStateToProps)(ProductDetails)
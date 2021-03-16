import React from 'react'
import { useState } from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Products.css'
import '../App.css'
import Navbar from './Navbar'
import { addToCart } from './../redux/actions/productActions'

const sortOptions = {
    "low-high": 1,
    "high-low": 2
}

function Products(props)
{
    const history = useHistory()
    const productList = useSelector(state => state.productReducer.productData)
    const [filteredProductList, setFilteredProductList] = useState(useSelector(state => state.productReducer.productData))
    const [filteredCategory, setFilteredCategory] = useState(useSelector(state => state.productReducer.filterCategory))
    const [selectedCategory, setSelectedCategory] = useState('all products')
    const [search, setSearchItem] = useState()
    const dispatch = useDispatch();

    const handleChangeCategory = (category) =>
    {
        if (category === 'all products')
        {
            setFilteredProductList(productList)
        }
        else
        {
            setFilteredProductList(productList.filter(item => item.tag === category))
        }
        setSelectedCategory(category)
    }



    const handleSort = (sortOption) =>
    {
        let result = null
        let products = productList;
        products = selectedCategory === "all products" ?
            products :
            products.filter(item => item.tag === selectedCategory);


        if (sortOption === sortOptions["high-low"])
        {
            result = products.sort((a, b) => Number(b.price) - Number(a.price))
        }
        else
        {
            result = products.sort((a, b) => Number(a.price) - Number(b.price))
        }
        setFilteredProductList(result)
    }

    const handleProductetails = (id) =>
    {
        history.push(`/productDetails/${id}`)
    }
    
    const handleClick = (item) =>
    {
        dispatch(addToCart(item));
    }

    return (
        <div>
            <Navbar 
                crumb={true} 
                length={props.cartItems.length}
            />

            <div className="d-flex justify-content-center mb-3">
                <input type="text" class="form-control col-6" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setSearchItem(e.target.value)} />
            </div>

            {
                filteredCategory &&
                filteredCategory.length > 0 &&
                <div className="d-flex row d-flex justify-content-between">
                    <div class="d-flex ml-5">
                        {filteredCategory.map(item =>
                        {
                            if (selectedCategory === item)
                            {
                                return (
                                    <button 
                                        type="button" 
                                        class="btn btn-dark btn-sm ml-1 mr-1" 
                                        onClick={() => handleChangeCategory(item)}
                                    >{item.toUpperCase()}</button>
                                )
                            }
                            else
                            {
                                return (
                                    <button 
                                        type="button" 
                                        class="btn btn-outline-dark btn-sm ml-1 mr-1" 
                                        onClick={() => handleChangeCategory(item)}
                                    >{item.toUpperCase()}</button>
                                )
                            }
                        })}
                    </div>
                    <div class="d-flex justify-content-end" style={{ marginRight: "90px" }}>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort By
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button 
                                    class="dropdown-item" 
                                    onClick={() => handleSort(sortOptions["low-high"])}
                                    >
                                    <b>$</b> - Low to High
                                </button>

                                <button 
                                    class="dropdown-item" 
                                    onClick={() => handleSort(sortOptions["high-low"])}
                                    >
                                    <b>$</b> - High to Low
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div class="container-fluid">
                <div class="row m-5" >
                    {
                        filteredProductList &&
                        filteredProductList.length > 0 &&
                        filteredProductList.filter((data) =>
                        {
                            if (search == null)
                                return data
                            else if (data.vendor.toLowerCase().includes(search.toLowerCase()))
                            {
                                return data
                            }
                        })
                        .map(item =>
                            {
                                return (
                                    <div key={item.id} className="dropdown" style={{ cursor: 'pointer' }} >
                                        <div class="col-sm-4 col-4 col-md-4 col-lg-3 pb-3" >
                                            <div class="card" style={{ width: "17rem" }}>
                                                <img src={item.image_src[0]} alt={item.name} class="card-img-top" />
                                                <div class="card-body">
                                                    <h6 class="card-title"><b>{item.vendor}</b></h6>
                                                    <p class="card-text text-mute"><small>{item.name}</small></p>
                                                    <h6><span><strong>${item.price} </strong><s class="text-muted">${item.compare_at_price}</s> <b class="text-danger">(50% OFF)</b></span></h6>
                                                    <button 
                                                        type="button" 
                                                        class="btn btn-outline-dark btn-sm ml-1 mr-1" 
                                                        onClick={() => {handleClick(item.id) }}
                                                        >Add To Cart
                                                    </button>
                                                    
                                                    <button 
                                                        type="button" 
                                                        class="btn btn-outline-dark btn-sm ml-1 mr-1" 
                                                        onClick={() => handleProductetails(item.id)}
                                                        >View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (filteredProductList) =>
{
    return {
        items: filteredProductList,
        cartItems: filteredProductList.productReducer.cartItems,
        
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

const StateToProps = (store) =>
{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps, )(Products)

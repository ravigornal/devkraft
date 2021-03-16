import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <Link to="/" ><a class="navbar-brand" href="link">E-Commerce</a></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse "  style={{marginLeft:'30%'}} id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto ">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark" href="link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Shop
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="link">Shop</a>
                                    <a class="dropdown-item" href="link">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="link">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="link">About Us <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="link">Our Stores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="link" tabindex="-1" aria-disabled="true">Contact Us</a>
                            </li>
                        </ul>
                        <Link to="/cart"><button type="button" class="btn btn-warning">
                            <i class="fas fa-shopping-cart ml-3"></i> <span class="badge badge-light">{this.props.length}</span>
                        </button></Link>
                    </div>
                </nav>
                
                {this.props.crumb &&
                    <div class="container-fluid text-light p-3" style={{background:'linear-gradient(90.06deg, #181716 0%, #ED4E08 99.97%)'}}>
                        <div class="row text-center">
                            <div class="col">
                            Invite Friends To Big Fashion Festival & Get Up To $150 MynCash For Every Person Who Visit
                            <button type="button" class="btn btn-light rounded-pill m-1">Invite Now</button>
                            </div>
                        </div>
                    </div>
                }
                
                {this.props.crumb &&
                    <div class="container-fluid  text-dark p-3">
                        <div class="row">
                            <div class="col">
                            <p> Home / Clothing / Mens Clothing / All Men Clothing</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Navbar

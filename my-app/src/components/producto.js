import React from 'react'
import PropTypes from 'prop-types'
import {  Redirect, Link } from 'react-router-dom'
import img_shipping from '../styles/images/ic_shipping.png'

class Producto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item:{},
            RedirectProductDetail:false
        }
        this.GoToProductDetails = this.GoToProductDetails.bind(this)
    }
    GoToProductDetails() {
        this.setState({
               RedirectProductDetail:true
        })

    }
    render(){
        const product = (this.props) 
        const GoToProduct = this.state.RedirectProductDetail
        if(GoToProduct){
            return (
                <div>
                     <Redirect push to={{pathname:`/ProductDetails/${this.props.id}`, state: {categories: this.props.categories} }} />
                </div>
            )
        }
        return(
            <div>
                <div className="single-product">
                    <div>
                        <a onClick={this.GoToProductDetails}>
                            <img className="img_search" src={product.picture} alt={product.title} />
                        </a>
                    </div>
                    <div className="label-price" > 
                        <h4 className="h4-price">${product.price.amount}
                            {
                                product.freeShipping ?
                                <span>&nbsp; <img src={img_shipping} /></span>
                                :''
                            }
                        </h4>
                        <label>{product.title}</label>
                    </div>
                    <div className="ubicacion">        
                        <label>{product.location}</label>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }

}
 export default Producto
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
            <Redirect push to={{pathname:`/ProductDetails/${this.props.id}`}} />
        }
        return(
            <div>
                <div className="single-product">
                    <div>
                        <Link to={{pathname:`/ProductDetails/${this.props.id}`}}>
                        <img className="img_search" src={product.foto} alt={product.titulo} />
                        </Link>
                    </div>
                    <div className="label-price" > 
                        <h4 className="h4-price">${product.precio}
                            {
                                product.freeShipping ?
                                <span>&nbsp; <img src={img_shipping} /></span>
                                :''
                            }
                        </h4>
                        <label>{product.titulo}</label>
                    </div>
                    <div className="ubicacion">        
                        <label>{product.ubicacion}</label>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }

}

Producto.propTypes = {
    id: PropTypes.number.isRequired,
        
    foto: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    titulo:PropTypes.string.isRequired,
    freeShipping:PropTypes.bool.isRequired
}

 export default Producto
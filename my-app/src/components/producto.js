import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'


 const Producto = ({ id, titulo, foto, ubicacion, precio }) => (
 
     <div>
         <div className="single-product">
            <div>
                <Link to="/DetailsProduct{id}" ><img src={foto} alt={titulo} /></Link>
            </div>
            <div className="label-price" > 
                <Link className="link-class">
                    <h4 className="h4-price">${precio}</h4>
                </Link>
                <label>{titulo}</label>
                       
            </div>
            <div className="ubicacion">        
                <label >{ubicacion}</label>
            </div>
        </div>
        <hr/>
    </div>
    
 ) 
 

Producto.propTypes = {
    id: PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    titulo:PropTypes.string.isRequired
}

 export default Producto
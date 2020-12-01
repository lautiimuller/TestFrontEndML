import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const DetailsProduct = ({title, photo,location,price  }) => (
     
        <div>
                <div>   
                    <a href="#">
                        <img src={photo} alt={title} />
                    </a>
                </div>
                <div > 
                    <a href="#" >
                        <h4 >${price}</h4>
                    </a>
                    <label>{title}</label>        
                </div>
                <div >        
                    <label >{location}</label>
                </div>
        </div>

)


DetailsProduct.propTypes = {
    title : PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price : PropTypes.string.isRequired

}

export default DetailsProduct
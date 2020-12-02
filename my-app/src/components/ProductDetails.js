import React from 'react'
import { getProductsById } from '../services/GetProducts'


class ProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item:[]
        }
        this.handleProductDetails = this.handleProductDetails.bind(this)
    }

    handleProductDetails(){
        const {id} = this.props.match.params;

        getProductsById(id)
            .then(result => this.setState({
                item: result.item
            }))
    }

    componentDidMount() {
        this.handleProductDetails();       
    }
    render() {
        const item = this.state;
    
        return (
            <div>
                <p>{item.title}</p>
            </div>
        )
    }
}

export default ProductDetails
import React from 'react'
import { categorySeparator, getProduct} from '../services/GetProducts'
import '../styles/productDetails.css'


class ProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item:{},
            categories: []
        }
        if (this.props.categories != undefined) {
              this.state.categories = this.props.categories.categories
        }
      
        this.handleProductDetails = this.handleProductDetails.bind(this)
    }

    handleProductDetails(){
        let pathname = window.location.pathname
        const id = pathname.split('/')[2]
        let newCategories =  categorySeparator(this.state.categories)
        getProduct(id)
            .then(result => this.setState({
                item: result.item,
                categories: newCategories
            }))    
    }

    componentDidMount() {  
        this.handleProductDetails();       
    }
    render() {
        const {item} = this.state;
        return (
            <div className="container first-box"> 
                <div className="col-12">
                    <div className="spaces-categories">
                        <span className="name categories-letters">{this.state.categories}</span>
                    </div>

                    <div className="row container-details">
                        <div className="next-column col-12">
                            
                            <div className="left img-product">
                                <div className="text-center">
                                    <img src={item.picture} alt="Product Photo" className="" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className=" col-8 product-condition">
                                        {
                                            item.condition == 'new' ? 
                                            'Nuevo' : 
                                            'used' ? 
                                            'Usado' : ''
                                        }
                                        {
                                            item.sold_quantity == 1 ? 
                                            ` - ${item.sold_quantity} vendido` :
                                            ` - ${item.sold_quantity} vendidos`
                                        } 
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-8">
                                        <h6 className="title">{item.title}</h6>
                                    </div>
                                </div>
                                
                                <div className="row ">
                                    <div className="col-8">
                                        {
                                        item.price ? 
                                        <label className="lbl-price">${`${item.price.amount}.${item.price.decimals}`}</label>
                                        : ''
                                    }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-8'>
                                        <a to="/" className="pr-3">
                                            <button className='btn btn-primary btn-block'>
                                                Comprar
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="row row-description">
                            <div className="col-12">
                                <div className="div-description">
                                        <div className="title-description">
                                            Descripción del producto
                                        </div>
                                        <div className="description">
                                            {item.description}
                                        </div>
                                    </div>
                                 </div>
                        </div> 
                    </div>
                </div>

            </div>
        )
    }
}

export default ProductDetails
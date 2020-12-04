import React from 'react'
import Producto from '../components/producto.js'
import {getProducts, getProductsById, getFilters} from '../services/GetProducts.js'
import Search from '../components/Search.js'
import { BrowserRouter as Router,  Switch, Route, Link, useParams} from 'react-router-dom'
import DetailsProduct from './DetailsProduct.js'
import ProductDetails from './ProductDetails.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,      
      items: [],
      categories:[],
      
    }
        this.handleSearch = this.handleSearch.bind(this)
    }

     async handleSearch(query){
       getProducts(query)
            .then(results => this.setState({
                items: results.items,
                categories: results.categories,
                
            })
        )}

    render() {
      const {items, categories} = this.state

        return ( 
        <Router> 
            <React.Fragment>   
                <Search handleSearch={this.handleSearch}/> 
                <Switch>

                    <Route path="/Products">  
                        <div className="div-categories">
                            {
                                categories.map((filter)=>
                                <span className="categories breadcrumb-item">{filter}</span>  
                                )  
                            }
                        </div>
                        <section className="products-container"> 
                            <div className="ubication-products">
                            {
                            
                            items.map((product) => <Producto                                 
                                title={product.title} 
                                price={product.price} 
                                location={product.address} 
                                picture={product.picture}                               
                                freeShipping={product.free_shipping} 
                                id={product.id}
                                categories={categories}
                                key = {product.id}
                                /> )
                            }
                            </div>
                        </section>
                    </Route>
                    <Route  path="/ProductDetails/:id" >
                       <ProductDetails/>
                    </Route>        
                </Switch>
            </React.Fragment> 
            </Router>
            )
    }
}
export default App

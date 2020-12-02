import React from 'react'
import Producto from '../components/producto.js'
import {getProductos, getProductsById} from '../services/GetProducts.js'
import Search from '../components/Search.js'
import { BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom'
import DetailsProduct from './DetailsProduct.js'
import ProductDetails from './ProductDetails.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,      
      items: [],
      filters:[],
     
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  async handleSearchId(id){
      const responseJson = await getProductsById(id)
      this.setState({items:responseJson.results})
  }

  async handleSearch(query) {
      const responseJson = await getProductos(query)
      let resultados = []
      let filtros = this.getFilters(responseJson)
      for (let i = 0; i < 4; i++) {
          resultados[i] = responseJson.results[i];   
      }
      this.setState({items: resultados, filters:filtros})
  }

    getFilters(json){
      let categories = []
      let paths_categories= {}
      for (let index = 0; index < 1; index++) {
           paths_categories = json.filters[0].values
           paths_categories[0].path_from_root.forEach(element => {
               categories.push(element.name)
           });
      }
      return categories
    }

  
  render() {
      const {filters, items} = this.state

        return ( 
        <Router> 
            <React.Fragment>   
                <Search handleSearch={this.handleSearch}/> 
                <Switch>
                    <Route path="/"> 
                        
                             
                        <div className="div-categories">
                            {
                                filters.map((filter)=>
                                <span className="categories breadcrumb-item">{filter} </span>  
                                )  
                            }
                        </div>
                        <section className="products-container"> 
                            <div className="ubication-products">
                            {

                            items.map((producto) => <Producto                                 
                                titulo={producto.title} 
                                precio={producto.price} 
                                ubicacion={producto.address.state_name} 
                                foto={producto.thumbnail}                               
                                freeShipping={producto.shipping.free_shipping} 
                                id={producto.id}
                                key = {producto.id}
                                /> )
                            }
                            </div>
                        </section>
                    </Route>
                    <Route exact path="/ProductDetails:id" component={ProductDetails}>
                        <div><div>{console.log(llega)}</div></div>
                    </Route>        
                </Switch>
            </React.Fragment> 
            </Router>
            )
    }
}
export default App

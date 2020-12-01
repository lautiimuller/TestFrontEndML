import React from 'react'
import Producto from '../components/producto.js'
import {getProductos} from '../services/GetProducts.js'
import Search from '../components/Search.js'
import { BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom'
import DetailsProduct from './DetailsProduct.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      
      items: [],
     
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  async handleSearch(query) {
      const responseJson = await getProductos(query)
      let resultados = []
      for (let i = 0; i < 4; i++) {
          resultados[i] = responseJson.results[i];   
      }
      this.setState({items: resultados})
  }
 
  handleViewer(product){
    console.log(product)
  
  }
  render() {
      const {items} = this.state
        return ( 
        <Router> 
            <React.Fragment>   
                <Search handleSearch={this.handleSearch}/> 
                <Switch>
                    <Route path="/"> 
                        <section className="products-container"> 
                            <div className="ubication-products">
                            {
                            items.map((producto) => <Producto 
                                titulo={producto.title} 
                                precio={producto.price} 
                                ubicacion={producto.address.state_name} 
                                foto={producto.thumbnail}
                                key = {producto.id}
                                /> )
                            }
                            </div>
                        </section>
                    </Route>
                    <Route path="/DetailsProduct:id"  >
                            
                        <DetailsProduct />
                    </Route>
                </Switch>
            </React.Fragment> 
        </Router>
            )
    }
}
export default App

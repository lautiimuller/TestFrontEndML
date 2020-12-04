import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class Search extends React.Component{
    constructor(){
        super()
        this.state= {
            query: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    handleOnChange(e) {
        this.setState({query:e.target.value})
        
    }
    render(){
        const {handleSearch} = this.props
        return(
            <nav class="navbar navbar-dark nav-busqueda">
                <div class="div-busqueda">
                    <div class="input-group">
                        <a class="nav-logo" href="../" tabindex="2"></a> 
                        <input type="text" value={this.state.query} onChange={this.handleOnChange} class="form-control" id="search" placeholder="Nunca dejes de buscar" />

                        <div class="input-group-append">
                        <Link to="/Products">    
                        <button class="btn btn-outline-secondary fa fa-search btn-busqueda" onClick={()=>handleSearch(this.state.query)} type="submit">🔍</button>
                        </Link></div>
                    </div>
                </div>
            </nav>
        )
    }
}

Search.propTypes = {
    handleSearch:PropTypes.func.isRequired
}

export default Search
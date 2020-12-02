export async function getProductos(query){
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    const responseJson = await response.json()
    return responseJson
}

export async function getProductsById(id){
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const responseJson = await response.json()
    return responseJson
}

export async function getProductsByDescription(id, description){
    const response = await fetch(`https://api.mercadolibre.com/items/${id}/${description}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    getProductsById, getProductos, getProductsByDescription
}



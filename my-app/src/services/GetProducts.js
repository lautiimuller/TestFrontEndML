export async function getProductos(query){
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    getProductos
}
const axios = require('axios');

function getProducts(query) {

    var request = {
        url: `https://api.mercadolibre.com/sites/MLA/search?q==${query}`,
        method: 'GET'
    };

    return axios(request)
        .then(response => {

            const data = response.data;

            var categoriesList = [];
            if(data.filters) {
                
                // Se busca el filtro relacionados a la Categoria
                const filter = data.filters.find(filter => filter.id == "category" );

                if(filter) {
                    categoriesList = filter.values[0].path_from_root.map((cat) => cat.name);
                }
            }

            var items = [];
            if (data.results) {

                items = data.results.slice(0,4);
                items = items.map(item => {
                    var most_price = item.price.toString().split('.');
                    const ints = most_price[0];
                    const decimals = most_price[1] ? most_price[1] : '00';

                    return {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: ints,
                            decimals: decimals
                        },
                        picture: item.thumbnail ? item.thumbnail : '',
                        condition: item.condition,
                        free_shipping: item.shipping ? item.shipping.free_shipping : false,
                        address: item.address ? item.address.state_name : ''
                    }
                });
            }    

            const result = {
                author: {
                    name: "Lautaro",
                    lastname: "Muller"
            },
            categories: categoriesList,
            items: items
            }

            return result;
        })
        
    }
function getProduct(id)
{
    var request = {
        url: `https://api.mercadolibre.com/items/${id}`,
        method: 'GET'
    };

    return axios(request)
        .then(response => {

            const data = response.data;

            var url_picture = '';
            if(data.pictures) {
                url_picture = data.pictures.length ? data.pictures[0].secure_url : '';
            }
            
            var price_array = data.price.toString().split('.');
            
            const free_shipping = data.shipping ? data.shipping.free_shipping : false;

            const price = price_array[0];
            const decimals = price_array[1] ? price_array[1] : '00';


            var response = {
                author: {
                    name: 'Lautaro',
                    lastname: 'Muller'
                },
                item: {
                    id: data.id,
                    title: data.title,
                    price: {
                        currency: data.currency_id,
                        amount: price,
                        decimals: decimals
                    },
                    picture: url_picture,
                    condition: data.condition,
                    free_shipping: free_shipping,
                    sold_quantity: data.sold_quantity,
                    description: ''
                }
            }

            return response;
        })
        .then(response => {

            return getProductDescription(response.item.id)
                    .then(result => {
                        response.item.description = result;
                        return response;
                    })
                    
        })
}   



function getProductDescription(id) {
    var request = {
        url: `https://api.mercadolibre.com/items/${id}/description`,
        method: 'GET'
    };
    return axios(request)
        .then(responseJson => responseJson.data.plain_text)
}


module.exports.getProduct = getProduct;
module.exports.getProductDescription = getProductDescription;
module.exports.getProducts = getProducts;


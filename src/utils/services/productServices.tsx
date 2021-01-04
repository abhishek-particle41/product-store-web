export const getProducts = async () => {
    let products: any = {}
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            products = json
        })
    return products
}
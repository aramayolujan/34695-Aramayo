const products = [
    {
        id:1,
        name: 'Semipermanente',
        price: 1350,
        category: 'esmaltes',
        img: 'images/semipermanente17.png',
        stock: 15,
        description: 'Tono #017'
    },
    {
        id:8,
        name: 'Acryl Gel',
        price: 2600,
        category: 'construccion',
        img: 'images/coverPinkShinner.png',
        stock: 15,
        description: 'Tono Cover Pink Shinner'
    },
    {
        id:16,
        name: 'Aplique Mariposa x2',
        price: 200,
        category: 'decoracion',
        img: 'images/mariposaHolo.png',
        stock: 15,
        description: 'Tono Holo Rosa'
    },
    {
        id:24,
        name: 'Pincel Kolinsky',
        price: 1870,
        category: 'herramientas',
        img: 'images/kolinsky4.png',
        stock: 15,
        description: 'size #4'
    }

]

export const getProductsNails = () => {
    return new Promise((resolve => {
        setTimeout (() => {
            resolve(products)
        }, 100)
    }))
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 100)
    })
}
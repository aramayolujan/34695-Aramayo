const products = [
    {
        id:'1',
        name: 'Semipermanente',
        price: 1350,
        category: 'esmaltes',
        img: 'https://i.ibb.co/XbXt88f/semipermanente17.png',
        stock: 15,
        description: 'Tono #017'
    },
    {
        id:'2',
        name: 'Acryl Gel',
        price: 2600,
        category: 'construccion',
        img: 'https://i.ibb.co/tKH0zP7/cover-Pink-Shinner.png',
        stock: 15,
        description: 'Tono Cover Pink Shinner'
    },
    {
        id:'3',
        name: 'Aplique Mariposa x2',
        price: 200,
        category: 'decoracion',
        img: 'https://i.ibb.co/cbDHHL8/mariposa-Holo.png'
        ,
        stock: 15,
        description: 'Tono Holo Rosa'
    },
    {
        id:'4',
        name: 'Pincel Kolinsky',
        price: 1870,
        category: 'herramientas',
        img: 'https://i.ibb.co/vvfHRQK/Kolinsky4.png',
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
const navbarOptions = ['Home', 'About', 'Service', 'Portfolio', 'Shop', 'Blog', 'Contact'];

const products = [
    {
        "id": 1,
        "name": "vegetable",
        "pic": "fe1.jpg"
    },
    {
        "id": 2,
        "name": "fruit",
        "pic": "fe2.jpg"
    },
    {
        "id": 3,
        "name": "milk",
        "pic": "fe3.jpg"
    }
]

const foods = [
    {
        'id': 1,
        'name': 'Fress Apple',
        'pic': 's5-150x150.jpg',
        'discount': false,
        'price': null,
        'lastPrice': '$18',
        'trend': true
    },
    {
        'id': 2,
        'name': 'Fress Cobie',
        'pic': 's2-150x150.jpg',
        'discount': true,
        'price': '$18',
        'lastPrice': '$17',
        'trend': true
    },
    {
        'id': 3,
        'name': 'Fresh Watermelon',
        'pic': 's8-150x150.jpg',
        'discount': false,
        'price': null,
        'lastPrice': '$15',
        'trend': true
    },
    {
        'id': 4,
        'name': 'Organic Juice',
        'pic': 's1-150x150.jpg',
        'discount': true,
        'price': '$20',
        'lastPrice': '$15',
        'trend': true
    },
    {
        'id': 5,
        'name': 'Fress Blueberries',
        'pic': 's4-150x150.jpg',
        'discount': true,
        'price': '$19',
        'trend': false,
        'lastPrice': '$14'
    },
    {
        'id': 6,
        'name': 'Organic Letus',
        'pic': 's10-150x150.jpg',
        'price': null,
        'discount': false,
        'trend': false,
        'lastPrice': '$23'
    },
    {
        'id': 7,
        'name': 'Red Gajor',
        'pic': 's9-150x150.jpg',
        'discount': true,
        'price': '$29',
        'trend': false,
        'lastPrice': '$26'
    },
    {
        'id': 8,
        'name': 'Naga Pepper',
        'pic': 's7-150x150.jpg',
        'price': null,
        'discount': false,
        'trend': false,
        'lastPrice': '$21'
    }
]

const trends = foods.filter(food => { return food.trend })

const news = [
    {
        'id': 1,
        'pic' : 'blo1-390x250.jpg',
        'littlePic' : 'blo1-70x70.jpg',
        'date': '17 Dec 2022',
        'text': 'Where I live, I am surrounded by fresh, organic food, so I eat really well.'
    },
    {
        'id': 2,
        'pic' : 'blo2-390x250.jpg',
        'littlePic' : 'blo2-70x70.jpg',
        'date': '16 Dec 2022',
        'text': 'What we get at home is 100% organic food. We are also 90% vegetarian.'
    },
    {
        'id': 3,
        'pic' : 'blo3-390x250.jpg',
        'date': '15 Dec 2022',
        'text': 'If we as a society are willing to have a preference for organic food farmer'
    },
]

const partners = [
    {
        id: 1,
        pic: 'brand1.png',
        type:'farm'
    },
    {
        id: 2,
        pic: 'brand2.png',
        type:'farm'
    },
    {
        id: 3,
        pic: 'brand3.png',
        type:'farm'
    },
    {
        id: 4,
        pic: 'brand4.png',
        type:'farm'
    },
    {
        id: 5,
        pic: 'brand1.png',
        type:'farm'
    },
]

const emergencyLinks = ['Organic Food Shop', 'Our Term & Condition', 'Gogrin Faq Section', 'Out Team Member', 'Our Latest News Feed']

export{navbarOptions, products, foods, trends, news, partners, emergencyLinks};
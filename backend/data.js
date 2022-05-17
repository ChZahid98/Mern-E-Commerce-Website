import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
          name: 'Saad',
          email: 'adminuser@gmail.com',
          password: bcrypt.hashSync('1234567'),
          isAdmin: true,
        },
        {
          name: 'Zahid',
          email: 'zahiduser@gmail.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],

    products:[
        {
            //_id: '1',
            name:'Nikon D6',
            slug:'nikon-d6',
            category: 'Cameras',
            image:'/images/p1.png',
            price:4500,
            countInStock:10,
            brand:'Nikon',
            rating:4.5,
            numReviews:10,
            description:'Best camera for professional to capture beautiful moments',
        },

        {
            //_id: '2',
            name:'Nikon D7',
            slug:'nikon-d7',
            category: 'Cameras',
            image:'/images/p3.png',
            price:6500,
            countInStock:10,
            brand:'Nikon',
            rating:4.5,
            numReviews:10,
            description:'Best camera for professional to capture beautiful moments',
        },

        {
            //_id: '3',
            name:'Nikon D8',
            slug:'nikon-d8',
            category: 'Cameras',
            image:'/images/p2.png',
            price:9500,
            countInStock:0,
            brand:'Nikon',
            rating:4.5,
            numReviews:10,
            description:'Best camera for professional to capture beautiful moments',
        },

        {
            //_id: '4',
            name:'Nikon D9',
            slug:'nikon-d9',
            category: 'Cameras',
            image:'/images/p4.png',
            price:8500,
            countInStock:10,
            brand:'Nikon',
            rating:4.4,
            numReviews:10,
            description:'Best camera for professional to capture beautiful moments',
        },
    ],
};

export default data;
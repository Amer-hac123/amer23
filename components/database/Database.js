export const COLOURS = {
  white: '#ffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',

};
export const Item = [
  {
    id: 1,
    category: 'product',
    productname: 'maly',
    productprice: '1000$',
    descreption: 'trekashketa,matrial sndvesh',
    isoff: true,
    offprecentage: 10,
    productImage: require('./images/products/m2.jpeg'),
    // productImage: require('./images/products/m1.avif'),
    productImageList: [
      require('./images/products/m2.jpeg'),
      require('./images/products/m3.png'),
      require('./images/products/m4.jpeg'),
      require('./images/products/m5.png'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productname: 'hatab',
    productprice: '1300$',
    descreption: 'trekashketa,matrial sndvesh',
    isoff: false,
    offprecentage: 10,
    productImage: require('../database/images/products/m2.jpeg'),
    productImageList: [
      //   require('../database/images/products/m1.avif'),
      require('../database/images/products/m3.png'),
      require('../database/images/products/m4.jpeg'),
      require('../database/images/products/m5.png'),
    ],
  },
  {
    id: 3,
    category: 'product',
    productname: 'klass',
    productprice: '1900$',
    descreption: 'trekashketa,matrial sndvesh',
    isoff: false,
    offprecentage: 10,
    productImage: require('../database/images/products/m3.png'),
    productImageList: [
      require('../database/images/products/m2.jpeg'),
      //   require('../database/images/products/m1.avif'),
      require('../database/images/products/m4.jpeg'),
      require('../database/images/products/m5.png'),
    ],
  },
  {
    id: 4,
    category: 'product',
    productname: 'modern',
    productprice: '2500$',
    descreption: 'trekashketa,matrial sndvesh',
    isoff: false,
    offprecentage: 10,
    productImage: require('../database/images/products/m4.jpeg'),
    productImageList: [
      require('../database/images/products/m2.jpeg'),
      require('../database/images/products/m3.png'),
      //   require('../database/images/products/m1.avif'),
      require('../database/images/products/m5.png'),
    ],
  },
  {
    id: 5,

    category: 'product',
    productname: 'fire',
    productprice: '3000$',
    descreption: 'trekashketa,matrial sndvesh',
    isoff: false,
    offprecentage: 10,
    productImage: require('../database/images/products/m5.png'),
    productImageList: [
      require('../database/images/products/m2.jpeg'),
      require('../database/images/products/m3.png'),
      require('../database/images/products/m4.jpeg'),
      //   require('../database/images/products/m1.avif'),
    ],
  },
];

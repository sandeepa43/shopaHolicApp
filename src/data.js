const books = [
  {
    id: '1',
    title: 'Dress 1 ',
    picture: require('./assets/images/app1.jpg'),
    price: 25,
    availableSizes: ['XS', 'L', 'XL'],
  },
  {
    id: '2',
    title: 'Dress 2',
    picture: require('./assets/images/img2.jpeg'),
    price: 35.99,
    availableSizes: ['X', 'M', 'XL'],
  },
  {
    id: '3',
    title: 'Dress 3',
    picture: require('./assets/images/img3.jpg'),
    price: 25.99,
    availableSizes: ['S', 'L', 'XL'],
  },
  {
    id: '4',
    title: 'Dress 4',
    picture: require('./assets/images/img4.jpeg'),
    price: 45.99,
    availableSizes: ['X', 'L'],
  },
  {
    id: '5',
    title: 'Dress 5',
    picture: require('./assets/images/img5.jpg'),
    price: 20.99,
    availableSizes: ['XS', 'L', 'XL'],
  },
  {
    id: '6',
    title: 'Dress 6',
    picture: require('./assets/images/img6.jpg'),
    price: 22,
    availableSizes: ['X', 'M', 'XL'],
  },
  {
    id: '7',
    title: 'Dress 7',
    picture: require('./assets/images/img7.jpeg'),
    price: 25.99,
    availableSizes: ['X', 'L', 'XL', 'M'],
  },
  {
    id: '8',
    title: 'Dress 8',
    picture: require('./assets/images/img8.jpg'),
    price: 21,
    availableSizes: ['X', 'M', 'XL'],
  },
  {
    id: '9',
    title: 'Dress 9',
    picture: require('./assets/images/img9.jpg'),
    price: 25.99,
    availableSizes: ['XS', 'L', 'XL'],
  },
  {
    id: '10',
    title: 'Dress 10',
    picture: require('./assets/images/img10.jpeg'),
    price: 19.99,
    availableSizes: ['X', 'L', 'XL'],
  },
];
export const getProducts = () => {
  return books;
};

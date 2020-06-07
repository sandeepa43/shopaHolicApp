const books = [
  {
    id: '1',
    title: 'Dress 1 ',
    picture: require('./assets/images/app1.jpg'),
    cost: 25,
  },
  {
    id: '2',
    title: 'Dress 2',
    picture: require('./assets/images/img2.jpeg'),
    cost: 35.99,
  },
  {
    id: '3',
    title: 'Dress 3',
    picture: require('./assets/images/img3.jpg'),
    cost: 25.99,
  },
  {
    id: '4',
    title: 'Dress 4',
    picture: require('./assets/images/img4.jpeg'),
    cost: 45.99,
  },
  {
    id: '5',
    title: 'Dress 5',
    picture: require('./assets/images/img5.jpg'),
    cost: 20.99,
  },
  {
    id: '6',
    title: 'Dress 6',
    picture: require('./assets/images/img6.jpg'),
    cost: 22,
  },
  {
    id: '7',
    title: 'Dress 7',
    picture: require('./assets/images/img7.jpeg'),
    cost: 25.99,
  },
  {
    id: '8',
    title: 'Dress 8',
    picture: require('./assets/images/img8.jpg'),
    cost: 21,
  },
  {
    id: '9',
    title: 'Dress 9',
    picture: require('./assets/images/img9.jpg'),
    cost: 25.99,
  },
  {
    id: '10',
    title: 'Dress 10',
    picture: require('./assets/images/img10.jpeg'),
    cost: 19.99,
  },
];
export const getProducts = () => {
  return books;
};

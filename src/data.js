const books = [
  {
    id: '1',
    title: 'Dress 1 ',

    introduction:
      'This book is written to help start beginning Android developers ',
    picture: require('./assets/images/app1.jpg'),
    cost: 25,
  },
  {
    id: '2',
    title: 'Dress 2',

    introduction:
      'This book is about shaking up your sense of understanding by exposing you ',
    picture: require('./assets/images/img2.jpeg'),
    cost: 35.99,
  },
  {
    id: '3',
    title: 'Dress 3',

    introduction: 'A complete refernce book on angular 2. ',
    picture: require('./assets/images/img3.jpg'),
    cost: 25.99,
  },
  {
    id: '4',
    title: 'Dress 4',

    introduction: 'Welcome to the second edition of Pro Git.  ',
    picture: require('./assets/images/img4.jpeg'),
    cost: 45.99,
  },
  {
    id: '5',
    title: 'Dress 5',

    introduction:
      'ReactJS was developed as a tool to solve a problem with the application state. ',
    picture: require('./assets/images/img5.jpg'),
    cost: 20.99,
  },
  {
    id: '6',
    title: 'Dress 6',

    introduction:
      'I’m sending you this gift of a condensed version of my 544-page original book in the hope',
    picture: require('./assets/images/img6.jpg'),
    cost: 22,
  },
  {
    id: '7',
    title: 'Dress 7',

    introduction: 'Front-end development moves forward fast.  ',
    picture: require('./assets/images/img7.jpeg'),
    cost: 25.99,
  },
  {
    id: '8',
    title: 'Dress 8',

    introduction:
      'It is the modern framework you need to build performant and robust web applications.',
    picture: require('./assets/images/img8.jpg'),
    cost: 21,
  },
  {
    id: '9',
    title: 'Dress 9',

    introduction: 'A complete refernce book on todays selling. ',
    picture: require('./assets/images/img9.jpg'),
    cost: 25.99,
  },
  {
    id: '10',
    title: 'Dress 10',

    introduction:
      'Learn to build modern web applications with node and expressjs ',
    picture: require('./assets/images/img10.jpeg'),
    cost: 19.99,
  },
];
export const getProducts = () => {
  return books;
};

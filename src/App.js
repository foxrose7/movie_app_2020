import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: '김치',
    image:
      'https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image:
      'https://i.namu.wiki/i/SdI6mHzKiWg-yJEqBpWhaACTth0ZSU_qSjhHCnQp5OxqwVl-PRIzql6bkmp1tm0YaHxjDoTbt-nBtiSE4nhqbQ.webp',
    rating: 4.9,
  },
  {
    id: 3,
    name: '비빔밥',
    image:
      'https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg',
    rating: 4.3,
  },
];
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = (dish) => {
//   return <Food name={dish.name} picture={dish.image} rating={dish.rating} />;
// };
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;

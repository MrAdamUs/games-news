import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';
import { gameDetailsURL } from '../api';

const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.detail);
  return (
    <div className='card-shadow'>
      <div className='detail'>
        <div className='stats'>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className='info'>
            <h3>Platforms</h3>
            <div className='platofrom'>
              {game.platforms.map((data) => (
                <h3 key={data.platforms.id}>{data.platforms.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className='media'>
          <img src={game.background_image} alt='img' />
        </div>
        <div className='gallery'>
          {screen.map((screen) => (
            <img src={screen.image} alt='img' key={screen.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;

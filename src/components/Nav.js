import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
//Redux and Routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch(fetchSearch());
  const [textInput, setTextInput] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt='logo' />
        <h1>Games News</h1>
      </Logo>
      <form className='search'>
        <input
          type='text'
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
        <button type='submit' onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    /* outline: none; */
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    background: #7a7a7a;
    color: #fff;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;

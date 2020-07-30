import React, {useContext} from "react";
import "./Categories.css";
import styled from "styled-components";
import {JokeContext} from "../../../../../JokeContext/JokeContext";

const Button = styled.button`
  color: #ABABAB;
  background-color: white;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 5px 10px;
  border: 2px solid #F8F8F8;
  border-radius: 6px;
  box-sizing: border-box;
  margin: 8px 8px;
  cursor: pointer;
  &:hover {
    color: #333;
  };
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333333;
    background-color: #F8F8F8;
    border: 2px solid #F8F8F8;
    border-radius: 6px;
    box-sizing: border-box;
    opacity: 1;
  `}
`;

function Categories() {

    const {
        categories,
        active,
        setActive
    } = useContext(JokeContext);

    /*Preventing from page refreshing after selecting category*/
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form className="categories" onSubmit={handleSubmit}>
            {categories.map(category =>
                <ButtonToggle
                        className="categories__btn"
                        value={category}
                        key={category}
                        active={active === category}
                        onClick={() => setActive(category)}
                >{category}</ButtonToggle>)}
        </form>
    );
}

export default Categories
import React from "react";
import "./CategoriesItself.css";
import styled from "styled-components";

const Button = styled.button`
  color: #ABABAB;
  background-color: white;
  font-size: 12px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 15px;
  border: 2px solid #F8F8F8;
  border-radius: 6px;
  box-sizing: border-box;
  margin: 10px 0px;
  cursor: pointer;
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    color: black;
    background-color: #ABABAB;
    opacity: 1;
  `}
`;

function CategoriesItself({ categories, active, setActive }) {

    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <form className="categories_list" onSubmit={handleSubmit}>
            {categories.map(category =>
                <ButtonToggle
                        className="category_btn"
                        value={category}
                        key={category}
                        active={active === category}
                        onClick={() => setActive(category)}
                >{category}</ButtonToggle>)}
        </form>
    );
}

export default CategoriesItself
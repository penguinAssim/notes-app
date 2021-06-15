import React from "react";
import styled from "styled-components";
const scale = window.innerWidth / 1000;
const scalev = window.innerWidth > 1000 ? 0.8 : window.innerWidth / 1400;
export const height = scale > 1 ? 70 * (scale / 2.5) : 70 * scale;
const SearchItemsContainer = styled.div`
  width:auto;
  display: flex;
  align-items center;
  justify-content: space-between;
  align-self:right; 
  justify-content:space-between;
  grid-column: ${Math.ceil((74 * scalev + 170 * scalev) / 16)} / 12;
  margin-left:auto;
  margin-right:auto;
  `;
const Search = styled.input`
  width: ${400 * scale - 20}px;
  height: ${height}px;
`;
const SearchOptions = styled.select`
  width: ${(400 * scale) / 2 - 20}px;
  margin-left: 20px;
  height: ${height}px;
  margin-left: ${100 * scale}px;
`;
const options = [
  { key: 0, value: "recent", text: "Most Recent" },
  {
    key: 1,
    value: "old",
    text: "Oldest",
  },
];
const Option = styled.option``;
const SearchItems = () => {
  return (
    <SearchItemsContainer>
      <Search></Search>
      <SearchOptions>
        {options.map((option) => (
          <Option key={option.id} value={option.value}>
            {option.text}
          </Option>
        ))}
      </SearchOptions>
    </SearchItemsContainer>
  );
};
export default SearchItems;

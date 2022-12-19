import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  width: 400px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: flex;
  width: 60px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: blue;
  color: #ffffff;
  font-size: 14px;

  :hover,
  :focus {
    background-color: #fb6d3a;
  }
`;

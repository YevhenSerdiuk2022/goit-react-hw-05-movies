import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin: auto;
  padding: 0;
  list-style: none;
  & span {
    font-weight: 500;
  }
  & img {
    border-radius: 5px;
  }
`
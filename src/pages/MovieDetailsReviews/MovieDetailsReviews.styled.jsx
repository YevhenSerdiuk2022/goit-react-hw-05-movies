import styled from 'styled-components';

export const Ul = styled.ul`
list-style-type: square;
  margin-left: 20px;
  & li {
    margin-bottom: 20px;
  }
  & li span {
    font-weight: 500;
  }
`;
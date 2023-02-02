import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;


export const Link = styled(NavLink)`
  padding: 8px 30px;
  border-radius: ${({ theme }) => theme.spacing(1)};
  text-decoration: none;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  &.active {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
  }
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }
`;

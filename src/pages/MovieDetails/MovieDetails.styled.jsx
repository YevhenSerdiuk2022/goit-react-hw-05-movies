import { Link } from "react-router-dom";
import styled from "styled-components";


export const AdditionalBox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  & p {
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
export const CastLink= styled(Link)`
display: inline-block;
color: ${({ theme }) => theme.colors.white};
 background-color: ${({ theme }) => theme.colors.primary};
 min-width: 120px;
 margin-right: 60px;
 text-align: center;
 border-radius: ${({ theme }) => theme.spacing(1)};
 font-size: 12px;
  padding: 8px 30px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  border: none;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }
`;
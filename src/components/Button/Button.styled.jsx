import styled from 'styled-components';

export const Button = styled.button`
display: inline-block;
color: ${({ theme }) => theme.colors.white};
 background-color: ${({ theme }) => theme.colors.primary};

 border-radius: ${({ theme }) => theme.spacing(1)};
 font-family:'Roboto',-apple-system,BlinkMacSystemFont,'Segoe UI','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
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

import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  width: 100%;
  margin: 30px auto;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.white};
  text-transform: uppercase;
  background: ${({ theme: { colors } }) => colors.primary};
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;
export const Ul = styled.ul`
  display: grid;
  max-width: calc(100% - 30px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin: 20px auto;
  padding: 0;
`;
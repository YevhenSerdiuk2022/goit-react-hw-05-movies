import styled from 'styled-components';

export const Card = styled.li`
display: flex;
  align-items: flex-end;
  min-height: 300px;
  border-radius: 10px;
  padding: 15px;
  background: white;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.4s ease-out;
  box-shadow: ${({ theme }) => theme.shadows.small};
  &:hover {
    transform: translateY(10px);
    &:before {
      opacity: 1;
    }


`;
export const Img = styled.img`
  width: 80%;
  height: 80%;
  object-fit: fill;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;
export const Info = styled.div`
text-transform: uppercase;
font-weight: bold;
font-size: 10px;
color: ${({ theme }) => theme.colors.white};
`;
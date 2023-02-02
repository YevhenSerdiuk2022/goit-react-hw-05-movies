import styled from 'styled-components'

export const Card = styled.div`
display: flex;
margin-top:30px;
`;

export const Img = styled.img`
display: block;
width: 300px;
border-radius: 5px;
`;
export const Info = styled.div`
flex: 1;
min-width: 200px;
margin-left: 20px;
color: ${({ theme }) => theme.colors.text};
`;
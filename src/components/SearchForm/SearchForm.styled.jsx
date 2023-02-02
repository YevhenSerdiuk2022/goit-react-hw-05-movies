import styled from 'styled-components';

export const Form = styled.form`
width: 100%;
display: flex;
`;
export const FormInput = styled.input`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  margin-right: 20px;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;
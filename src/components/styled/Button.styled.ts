import styled from 'styled-components';

interface StyledButtonProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const Button = styled.button<StyledButtonProps>`
  color: white;
  text-align: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 0.8rem;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 50px;
`;

export default Button;

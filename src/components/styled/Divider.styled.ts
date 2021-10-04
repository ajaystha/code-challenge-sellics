import styled from 'styled-components';

interface StyledHrProps {
  marginTop?: string | number;
  marginBottom?: string | number;
}

const Divider = styled.hr<StyledHrProps>`
  margin-top: ${({ marginTop }) => marginTop || '1rem'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '1rem'};
  border: 0;
  border-top: 1px solid #e3e8f0;
`;

export default Divider;

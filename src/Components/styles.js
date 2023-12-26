import styled from 'styled-components';

export const Box = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

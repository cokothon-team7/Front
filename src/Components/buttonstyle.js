import styled from 'styled-components';

export const Button = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  background-color: #439A97;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`;
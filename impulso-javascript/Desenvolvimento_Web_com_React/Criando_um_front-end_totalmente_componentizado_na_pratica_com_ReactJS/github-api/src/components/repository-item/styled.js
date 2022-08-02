import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 300px;
  height: max-content;
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 8px 0;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  margin: 8px 0;
  color: tomato;
`;

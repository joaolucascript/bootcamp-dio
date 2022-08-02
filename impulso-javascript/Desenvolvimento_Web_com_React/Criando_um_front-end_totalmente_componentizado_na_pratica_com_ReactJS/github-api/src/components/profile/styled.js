import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: max-content;
  margin: 32px auto 0px auto;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 20px;
  background-color: #2b2a33;
  color: white;

  @media (max-width: 1020px) {
    width: 100%;
    max-width: 800px;
    margin: 20px auto 0 auto;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    color: white;
  }
  @media (max-width: 700px) {
    width: 380px;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
  height: 200px;

  h1 {
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
  }
  h4 {
    font-size: 14px;
    font-weight: 200;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  margin-left: -10px;
  margin-top: 10px;
  div {
    margin: 0 6px;
    padding: 12px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  h3 {
    margin-right: 10px;
  }
  a {
    color: tomato;
    font-size: 16px;
    font-style: italic;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 1020px) {
    box-shadow: none;
  }
`;
